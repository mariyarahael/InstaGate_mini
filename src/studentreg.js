import { useState } from "react";
import { Link } from "react-router-dom";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    studyYear: "",
    department: "",
    address: "",
    hostelName: "",
    hostelRoom: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex bg-gray-800 text-white rounded-xl shadow-lg w-full max-w-4xl">
        {/* Left Side (Image & Branding) */}
        <div className="hidden md:flex flex-col justify-between p-8 bg-gray-700 rounded-l-xl w-1/2">
          <h1 className="text-2xl font-bold">InstaGate</h1>
          <div className="flex-grow flex flex-col justify-center">
            <img src="image5.jpg" className="rounded-lg" alt="fithos" />
            <p className="mt-4 text-lg">Streamlining Hostel Pass Processing</p>
          </div>
          <button className="mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-500 rounded-lg text-sm">Back to website →</button>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold">Student Registration</h2>
          <p className="text-gray-400 mt-2">
            Already have an account? <a href="#" className="text-blue-400">Log in</a>
          </p>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              <input
                key={key}
                type={key.includes("password") ? "password" : key === "email" ? "email" : key === "phone" ? "tel" : "text"}
                name={key}
                placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                value={formData[key]}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-400"
                required
              />
            ))}
            <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-md">
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/student-portal" className="text-blue-400">Go to Student Portal</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
