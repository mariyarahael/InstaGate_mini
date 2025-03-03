import { Link } from "react-router-dom";

const CabBooking = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-4xl">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col justify-between p-8 bg-gray-700 rounded-l-xl w-1/3">
          <h2 className="text-3xl font-extrabold text-yellow-400">🚖 Book Your Ride!</h2>
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
          <h3 className="text-xl font-bold mb-4">Available Cabs</h3>
          {[{ name: "Avarachan", phone: "+91 97477 20322" }, { name: "Baby", phone: "+91 98468 73112" }].map(
            (driver, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl mb-4">
                <p className="text-lg font-semibold">Driver: {driver.name}</p>
                <p className="text-gray-300">Auto No: ABC-1234</p>
                <p className="text-gray-300 flex items-center">
                  Phone: {driver.phone}{" "}
                  <a href={`tel:${driver.phone}`} className="ml-2 text-blue-400">
                    📞
                  </a>
                </p>
                <button className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-semibold">
                  Book Now
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-blue-400 text-lg font-semibold mr-4">
          🏠 Home
        </Link>
        <Link to="/student-portal" className="text-blue-400 text-lg font-semibold">
          🎓 Student Portal
        </Link>
      </div>
    </div>
  );
};

export default CabBooking;
