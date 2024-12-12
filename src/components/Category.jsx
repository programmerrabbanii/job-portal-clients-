import left1 from '../assets/imgs/marketing.svg'
import customer from '../assets/imgs/customer.svg'
import software from '../assets/imgs/lightning.svg'
import hiring from '../assets/imgs/left1.svg'
import hiring2 from '../assets/imgs/left2.svg'

const Category = () => {
    return (
       <div className="mt-10 w-10/12 mx-auto mb-10">
  <div className="text-center">
    <h2 className="text-3xl font-semibold">Browse by category</h2>
    <p className="text-gray-600 mt-2">
      Find the job that’s perfect for you. About 800+ new jobs every day
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
    <div className="flex gap-3 items-center p-4 rounded-md border border-gray-200 shadow-sm bg-white hover:shadow-lg hover:border-blue-500 hover:scale-105 transform transition duration-300">
      <div>
        <img src={left1} alt="Marketing & Sales" className="w-12 h-12" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800">Marketing & Sales</h3>
        <small className="text-sm text-gray-500">1516 jobs available</small>
      </div>
    </div>

    <div className="flex gap-3 items-center p-4 rounded-md border border-gray-200 shadow-sm bg-white hover:shadow-lg hover:border-blue-500 hover:scale-105 transform transition duration-300">
      <div>
        <img src={customer} alt="Customer Help" className="w-12 h-12" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800">Customer Help</h3>
        <small className="text-sm text-gray-500">150 jobs available</small>
      </div>
    </div>

    

    <div className="flex gap-3 items-center p-4 rounded-md border border-gray-200 shadow-sm bg-white hover:shadow-lg hover:border-blue-500 hover:scale-105 transform transition duration-300">
      <div>
        <img src={software} alt="Software" className="w-12 h-12" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800">Software</h3>
        <small className="text-sm text-gray-500">8516 jobs available</small>
      </div>
    </div>

    <div className="flex gap-3 items-center p-4 rounded-md border border-gray-200 shadow-sm bg-white hover:shadow-lg hover:border-blue-500 hover:scale-105 transform transition duration-300">
      <div>
        <img src={left1} alt="Human Resource" className="w-12 h-12" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800">Human Resource</h3>
        <small className="text-sm text-gray-500">516 jobs available</small>
      </div>
    </div>
  </div>
  {/* hiring section */}
  <div className="flex items-center justify-center gap-20 mt-10 bg-white border rounded-lg shadow-md p-4">
    {/* Left Section: Image */}
    <img src={hiring} alt="Hiring" className="w-16 h-16" />

    {/* Middle Section: Text */}
    <div className="flex flex-col items-start ml-4 mr-4">
        <h5 className="text-gray-500 text-sm uppercase font-semibold tracking-wide">We Are</h5>
        <h2 className="text-6xl font-bold uppercase text-gray-800">Hiring</h2>
        <div className="text-gray-600">
            <p className="text-sm">Let’s Work Together</p>
            <p className="text-sm font-semibold text-gray-800">& Explore Opportunities</p>
        </div>
    </div>

    {/* Right Section: Button */}
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none transition">
        Apply Now
    </button>

    {/* Right Image */}
    <img src={hiring2} alt="Teamwork Illustration" className=" h-16 ml-4" />
</div>







</div>

    );
};

export default Category;