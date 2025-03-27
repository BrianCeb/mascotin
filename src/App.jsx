import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import PetProfile from "./pages/PetProfile";
// import ScanQR from "./pages/ScanQR";

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pet/:id" element={<PetProfile />} />
        <Route path="/scan" element={<ScanQR />} /> */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
