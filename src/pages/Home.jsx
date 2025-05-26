import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <img src="/mascotin.png" alt="Logo de Mascotin" className="mb-4 w-32 h-32" />
            <p className="text-lg text-gray-600 mb-6">Registra a tu mascota y ayúdala a volver a casa en caso de pérdida.</p>
            <div className="flex space-x-4">
                <Link to="/register" className="bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition">
                    Registrarse
                </Link>
                <Link to="/scanQR" className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
                    Encontré una Mascota
                </Link>
            </div>
        </div>
    );
}

export default Home;
