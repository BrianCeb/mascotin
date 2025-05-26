import { useParams } from "react-router-dom";

function PetProfile() {
    const { id } = useParams();
    const pets = JSON.parse(localStorage.getItem("pets")) || [];
    const pet = pets.find((p) => p.petId === id);

    if (!pet) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Mascota no encontrada</h1>
                <p className="text-gray-700">Verificá que el ID sea correcto o intentá nuevamente.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
            {pet.image && (
                <img
                    src={pet.image}
                    alt={pet.petName}
                    className="w-40 h-40 object-cover rounded-full mb-4 shadow-md border-4 border-pink-300"
                />
            )}

            <h1 className="text-4xl font-bold text-gray-800 mb-2">{pet.petName}</h1>
            <p className="text-lg text-gray-600 mb-1">Raza: {pet.breed}</p>
            <p className="text-lg text-gray-600 mb-1">Tamaño: {pet.size}</p>
            <p className="text-md text-gray-700 mt-2">ID: <strong>{pet.petId}</strong></p>

            {/* QR visible */}
            <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.origin}/pet/${pet.petId}`}
                alt="QR Code"
                className="mx-auto mt-4 border border-pink-300 rounded"
            />

            <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md max-w-md w-full text-left">
                <h2 className="text-xl font-bold text-pink-600 mb-2 text-center">Contacto del Dueño</h2>
                <p><strong>Nombre:</strong> {pet.ownerName}</p>
                <p><strong>Teléfono:</strong> {pet.ownerPhone}</p>
                <p><strong>Email:</strong> {pet.ownerEmail}</p>
            </div>
        </div>
    );
}

export default PetProfile;
