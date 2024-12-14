const AddJob = () => {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 shadow-xl rounded-3xl bg-gradient-to-r from-pink-100 to-blue-100">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-pink-600">
          ✨ Add Your Dream Job ✨
        </h2>
        <form className="space-y-6">
          {/* Job Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Frontend Developer"
              className="input input-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
  
          {/* Job Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Job Location</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Remote / Dhaka"
              className="input input-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
  
          {/* Job Types */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Job Type</span>
            </label>
            <select className="select select-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400">
              <option disabled selected>
                Select Job Type
              </option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Remote</option>
            </select>
          </div>
  
          {/* Job Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Job Category</span>
            </label>
            <select className="select select-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400">
              <option disabled selected>
                Select Job Category
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
  
          {/* Salary Range */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-blue-600">Salary (Min)</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 50000"
                className="input input-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-blue-600">Salary (Max)</span>
              </label>
              <input
                type="number"
                placeholder="e.g., 120000"
                className="input input-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold text-blue-600">Currency</span>
              </label>
              <select className="select select-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400">
                <option disabled selected>
                  Select Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
  
          {/* Job Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered rounded-3xl bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              placeholder="Briefly describe the job..."
              rows="4"
            ></textarea>
          </div>
  
          {/* Requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Requirements</span>
            </label>
            <textarea
              className="textarea textarea-bordered rounded-3xl bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              placeholder="List the requirements (one per line)..."
              rows="4"
            ></textarea>
          </div>
  
          {/* Responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Responsibilities</span>
            </label>
            <textarea
              className="textarea textarea-bordered rounded-3xl bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              placeholder="List the responsibilities (one per line)..."
              rows="4"
            ></textarea>
          </div>
  
          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">HR Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g., hr@example.com"
              className="input input-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
  
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">HR Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g., John Doe"
              className="input input-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
  
          {/* Company Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-blue-600">Company Logo URL</span>
            </label>
            <input
              type="text"
              name="logo"
              placeholder="e.g., https://example.com/logo.png"
              className="input input-bordered rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
  
          {/* Submit Button */}
          <div className="text-center mt-6">
            <button className="btn btn-primary bg-pink-500 hover:bg-pink-600 text-white rounded-full px-10 py-3 shadow-lg transform hover:scale-105">
              Post Job
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddJob;
  