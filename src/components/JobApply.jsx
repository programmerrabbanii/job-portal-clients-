import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";

const JobApply = () => {
    const id=useParams()
    const {user}=useContext(AuthContext)
 
    const handleSubmit=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const coverLetter=e.target.coverLetter.value;
        const linkedIn=e.target.linkedIn.value;
        const hr_email=e.target.email.value;
        const phone=e.target.phone.value;
        const jobApplyInfo={name,coverLetter,linkedIn,hr_email,phone,job_id: id,applicant_email:user.email }
        console.log(jobApplyInfo);
        fetch('http://localhost:5000/job-apply',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(jobApplyInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your applyed has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-6 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 animate-slideIn">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Apply for the Job
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="Your Linkedin "
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              GitHub Profile
            </label>
            <input
              type="url"
              name="github"
              placeholder="Your Github"
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

         

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              placeholder="Write a short cover letter..."
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
