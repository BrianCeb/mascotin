import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PetProfile from "./pages/PetProfile";
import ScanQR from "./pages/ScanQR";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router> {/* Router envolviendo todo el contenido */}
            <Navbar />
            <Routes>
                <Route path="/home" element={<Landing />} />
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pet/:id" element={<PetProfile />} />
                <Route path="/scanQR" element={<ScanQR />} />
            </Routes>
        </Router>
    );
}

export default App;