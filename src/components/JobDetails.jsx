import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const detailsData = useLoaderData();
  const {
    _id,
    title,
    location,
    applicationDeadline,
    jobType,
    category,
    salaryRange,
    company,
    description,
    company_logo,
    requirements,
  } = detailsData;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Job Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg rounded-lg p-6 flex items-center gap-6 mb-8 animate-slideIn">
        <img
          src={company_logo}
          alt={company}
          className="w-24 h-24 rounded-md object-contain border-2 border-white"
        />
        <div>
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <p className="text-lg font-medium mt-1">{company}</p>
          <p className="text-sm mt-1 flex items-center opacity-90">
            <span className="mr-2">&#x1F4CD;</span> {location}
          </p>
        </div>
      </div> 

      {/* Job Details */}
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
          Job Details
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <span className="font-medium">Description: </span>
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <p className="text-gray-700">
            <span className="font-medium">Category: </span> {category}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Job Type: </span> {jobType}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Application Deadline: </span>{" "}
            {applicationDeadline}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Salary: </span>{" "}
            {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
          </p>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
          Requirements
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {requirements.map((req, index) => (
            <li key={index} className="hover:text-blue-600 transition-colors">
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="flex justify-center mt-8">
        <Link to={`/jobApply/${_id}`} className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-all duration-300">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
 