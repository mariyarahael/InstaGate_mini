import { Link } from "react-router-dom";

const StudPortal = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-4xl">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col justify-between p-8 bg-gray-700 rounded-l-xl w-1/3">
          <h2 className="text-3xl font-extrabold text-blue-400">👋 Hi, Student Name!</h2>
          <div className="flex-grow flex flex-col justify-center mt-4">
            <a href="#profile" className="block py-3 px-4 bg-gray-600 hover:bg-gray-500 rounded-xl text-center">
              Profile
            </a>
            <a href="#settings" className="block py-3 px-4 bg-gray-600 hover:bg-gray-500 rounded-xl text-center mt-2">
              Settings
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-8">
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full py-6 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-semibold">
              Request Gate Pass
            </button>
            <Link to="/cab-booking" className="w-full">
              <button className="w-full py-6 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-semibold">
                Book a Cab
              </button>
            </Link>
            <div className="col-span-2 bg-gray-700 p-6 rounded-xl mt-4">
              <h3 className="text-lg font-bold">Gate Pass Status</h3>
              <div className="mt-3 space-y-2">
                <div className="flex items-center">
                  <span className="w-5 h-5 bg-gray-500 rounded-full inline-block mr-3"></span> Parent Approval
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 bg-gray-500 rounded-full inline-block mr-3"></span> Warden Approval
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 bg-gray-500 rounded-full inline-block mr-3"></span> Request Granted
                </div>
              </div>
              <button className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl mt-4 text-lg font-semibold">
                Download Gate Pass
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-blue-400 text-lg font-semibold mr-4">🏠 Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudPortal;
