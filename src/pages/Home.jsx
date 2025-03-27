import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Identificación Inteligente para Mascotas</h1>
            <p className="text-lg text-gray-600 mb-6">Registra a tu mascota y ayúdala a volver a casa en caso de pérdida.</p>
            <div className="flex space-x-4">
                <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                    Registrarse
                </Link>
                <Link to="/scan" className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
                    Encontré una Mascota
                </Link>
            </div>
        </div>
    );
}

export default Home;
