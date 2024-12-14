import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { FcDeleteDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";

const MyApply = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/job-applyed?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  const jobDeleted=(id)=>{
    fetch(`http://localhost:5000/jobs/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data); 
    })
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
                jobs.map((job)=> <tr>
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
                  <Link onClick={jobDeleted} className="text-5xl"><FcDeleteDatabase />
                  </Link>
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
