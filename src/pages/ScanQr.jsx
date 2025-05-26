import { useState } from "react";

function ScanQR() {
    const [scannedId, setScannedId] = useState("");
    const [petData, setPetData] = useState(null);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        setScannedId(e.target.value);
    };

    const handleScan = () => {
        const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
        const foundPet = savedPets.find((p) => p.petId === scannedId.trim().toUpperCase());

        if (foundPet) {
            setPetData(foundPet);
            setMessage("");
        } else {
            setPetData(null);
            setMessage("No se encontró ninguna mascota con ese ID.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Escanear Código QR</h2>
            <p className="text-lg text-gray-600 mb-4">Ingrese el código de identificación de la mascota.</p>

            <input
                type="text"
                value={scannedId}
                onChange={handleInputChange}
                placeholder="Ej: P-83B7X"
                className="w-80 p-2 border rounded mb-4 text-center uppercase"
            />
            <button
                onClick={handleScan}
                className="bg-pink-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-pink-700 transition"
            >
                Buscar
            </button>

            {message && <p className="mt-4 text-lg font-semibold text-red-600">{message}</p>}

            {petData && (
                <div className="bg-white p-6 mt-6 rounded-lg shadow-lg w-full max-w-md text-center">
                    {petData.image && (
                        <img
                            src={petData.image}
                            alt={petData.petName}
                            className="w-40 h-40 object-cover rounded-full mb-4 mx-auto border-4 border-pink-300"
                        />
                    )}
                    <h3 className="text-3xl font-bold mb-2">{petData.petName}</h3>
                    <p className="text-gray-700 mb-1">Raza: {petData.breed}</p>
                    <p className="text-gray-700 mb-1">Tamaño: {petData.size}</p>
                    <p className="text-sm text-gray-500 mt-2">ID: {petData.petId}</p>

                    <div className="mt-6 text-left bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-pink-600 mb-2 text-center">Contacto del Dueño</h4>
                        <p><strong>Nombre:</strong> {petData.ownerName}</p>
                        <p><strong>Teléfono:</strong> {petData.ownerPhone}</p>
                        <p><strong>Email:</strong> {petData.ownerEmail}</p>

                        <div className="mt-4 flex flex-col gap-2">
                            <a
                                href={`tel:${petData.ownerPhone}`}
                                className="bg-green-600 text-white py-2 px-4 rounded text-center hover:bg-green-700"
                            >
                                📞 Llamar al dueño
                            </a>
                            <a
                                href={`https://wa.me/${petData.ownerPhone.replace(/[^0-9]/g, '')}?text=Hola! Encontré a tu mascota identificada con Mascotin.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-500 text-white py-2 px-4 rounded text-center hover:bg-emerald-600"
                            >
                                💬 Enviar WhatsApp
                            </a>
                            <a
                                href={`mailto:${petData.ownerEmail}?subject=Mascota encontrada&body=Hola, encontré a tu mascota identificada con el código ${petData.petId}.`}
                                className="bg-blue-600 text-white py-2 px-4 rounded text-center hover:bg-blue-700"
                            >
                                📧 Enviar Email
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ScanQR;
