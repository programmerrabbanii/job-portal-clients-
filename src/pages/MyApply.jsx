import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { FcDeleteDatabase } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";

const MyApply = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/job-applyed?email=${user.email}`,{withCredentials:true})
    .then(res=>setJobs(res.data))
  }, [user.email]);

  const jobDeleted=(id)=>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
     fetch(`http://localhost:5000/job/${id}`,{
          method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.deletedCount >0){
            Swal.fire({
              title: "Deleted!",
              text: "Your Job  has been deleted.",
              icon: "success"
            });
          }
      })
      const remaing=jobs.filter((job)=> job._id !==id)
      setJobs(remaing)
      }
    });
 
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
             {
                jobs?.map((job)=> <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {job.jobType}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.category}
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button onClick={()=>jobDeleted(job._id)} className="text-5xl"><FcDeleteDatabase />
                  </button>
                </th>
              </tr>)
             }
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApply;
