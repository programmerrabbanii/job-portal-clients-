import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
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
  } = job;

  
  const trimmedDescription =
    description.length > 200 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className="card card-compact bg-white shadow-md border border-gray-200 rounded-lg p-5 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
      <figure className="flex items-center space-x-4">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain rounded-md animate-fadeIn"
        />
        <div>
          <p className="font-bold text-lg">{company}</p>
          <p className="flex items-center text-gray-500 text-sm">
            <IoLocationOutline className="text-blue-500 mr-1" />
            {location}
          </p>
        </div>
      </figure>
      <div className="card-body mt-4">
        <h2 className="card-title text-xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-3">{trimmedDescription}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {requirements.map((require, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full border hover:bg-blue-100 transition-colors duration-200"
            >
              {require}
            </span>
          ))}
        </div>
        <p className="text-gray-800 font-medium">
          Salary: {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/apply/${_id}`}
            className="btn bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 border-none px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
