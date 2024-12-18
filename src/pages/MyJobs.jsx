import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Deadline</th>
              <th>jobType</th>
              <th>Job Count</th>
            </tr>
          </thead>
          <tbody>
          {
            jobs.map((job,index)=> <tr>
            <th>{index+1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.jobType}</td>
            <td>{job.jobApplicationCount}</td>
          </tr>)
          }            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;