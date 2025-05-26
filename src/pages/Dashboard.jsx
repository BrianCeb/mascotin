import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    const [petList, setPetList] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("pets")) || [];
        setPetList(savedData);
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Panel de Control</h1>
            <p className="text-lg text-gray-600 mb-6">Aquí puedes administrar tus mascotas registradas.</p>

            {petList.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
                    {petList.map((pet) => (
                        <div key={pet.petId} className="bg-white rounded-lg shadow p-4 flex items-center group">
                            {/* Imagen o inicial */}
                            {pet.image ? (
                                <img
                                    src={pet.image}
                                    alt={pet.petName}
                                    className="w-16 h-16 object-cover rounded-full border-2 border-pink-300 mr-4"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold mr-4">
                                    {pet.petName.charAt(0)}
                                </div>
                            )}

                            {/* Info y link */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-pink-600">{pet.petName}</h3>
                                <p className="text-gray-700">{pet.breed} · ID: {pet.petId}</p>
                                <Link
                                    to={`/pet/${pet.petId}`}
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Ver perfil
                                </Link>
                            </div>

                            {/* QR oculto, aparece en hover en pantallas md+ */}
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${window.location.origin}/pet/${pet.petId}`}
                                alt={`QR de ${pet.petName}`}
                                className="hidden md:block group-hover:block w-20 h-20 ml-4 border border-pink-200 shadow-md rounded"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-lg text-gray-600">No hay mascotas registradas aún.</p>
            )}
        </div>
    );
}

export default Dashboard;
