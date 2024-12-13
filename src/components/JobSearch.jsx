import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JobSearch = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className="mt-10">
           <div className="text-center">
           <h3 className="text-3xl">Jobs of the day</h3>
           <p>Search and connect with the right candidates faster.</p>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 w-11/12 mx-auto">
                {
                jobs.map((job)=> <JobCard job={job} key={job._id}></JobCard>)
                }

            </div>
        </div>
    );
};

export default JobSearch;