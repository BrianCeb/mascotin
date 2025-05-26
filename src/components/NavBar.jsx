import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-pink-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">Mascotin</Link>
                <div className="flex space-x-4">
                    <Link to="/home" className="text-gray-300 hover:text-white">Inicio</Link>
                    <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                    <Link to="/register" className="text-gray-300 hover:text-white">Registro</Link>
                    <Link to="/scanQR" className="text-gray-300 hover:text-white">Escanear QR</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;