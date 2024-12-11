import Lottie from 'lottie-react';
import lottieRegister from '../assets/lottie/Animation - 1733924011105.json';

const Register = () => {
    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const photo=e.target.photo.value;

        console.log(name,email,password,photo);

    }
  return (
    <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Lottie Animation */}
        <div className="text-center lg:text-left w-full max-w-md">
          <Lottie animationData={lottieRegister} loop={true} />
        </div>

        {/* Card with Form */}
        <div className="card bg-white shadow-2xl w-full max-w-3xl mx-auto rounded-xl p-8">
          <form  onSubmit={handleRegister} className="card-body">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name Input Field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text text-lg font-medium">Full Name</span>
                </label>
                <input
                  name='name'
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered input-primary w-full py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Email Input Field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  name='email'
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered input-primary w-full py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Password Input Field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text text-lg font-medium">Password</span>
                </label>
                <input 
                  name='password'
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered input-primary w-full py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                
              </div>

              {/* Profile Photo URL Input Field */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text text-lg font-medium">Profile Photo URL</span>
                </label>
                <input
                  name='photo'
                  type="text"
                  placeholder="Enter your profile photo URL"
                  className="input input-bordered input-primary w-full py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full py-3 rounded-lg text-lg font-medium">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
