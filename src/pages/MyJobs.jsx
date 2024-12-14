import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        My Jobs
      </h2>
      <div className="overflow-hidden shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse bg-white text-sm text-gray-700">
          {/* Table Head */}
          <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <tr>
              <th className="py-4 px-6 text-left font-semibold">#</th>
              <th className="py-4 px-6 text-left font-semibold">Job Title</th>
              <th className="py-4 px-6 text-left font-semibold">Deadline</th>
              <th className="py-4 px-6 text-left font-semibold">Job Type</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-gray-200 transition-all duration-300`}
                >
                  <td className="py-4 px-6 font-medium text-gray-800">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 font-medium text-blue-600">
                    {job.title}
                  </td>
                  <td className="py-4 px-6">{job.applicationDeadline}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        job.jobType === "Full-Time"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {job.jobType}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-6 px-6 text-center text-gray-500 italic"
                >
                  No jobs found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs; 
