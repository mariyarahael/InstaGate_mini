import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentReg from "./studentreg";
import StudPortal from "./studportal";
import CabBooking from "./cabbooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentReg />} />
        <Route path="/student-portal" element={<StudPortal />} />
        <Route path="/cab-booking" element={<CabBooking />} /> {/* ✅ Ensure this is here */}
      </Routes>
    </Router>
  );
}

export default App;
