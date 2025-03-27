import { useState } from "react";

function ScanQR() {
    const [scannedId, setScannedId] = useState("");
    const [petData, setPetData] = useState(null);
    const [message, setMessage] = useState("");

    // Manejar el cambio del input
    const handleInputChange = (e) => {
        setScannedId(e.target.value);
    };

    // Buscar la mascota en localStorage
    const handleScan = () => {
        const savedData = localStorage.getItem("petData");
        if (savedData) {
            const pet = JSON.parse(savedData);
            if (pet.petId === scannedId) {
                setPetData(pet);
                setMessage("¡Mascota encontrada! Contactando al dueño...");
            } else {
                setPetData(null);
                setMessage("No se encontró ninguna mascota con este ID.");
            }
        } else {
            setMessage("No hay datos guardados en el sistema.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Escanear Código QR(prueba)</h2>
            <p className="text-lg text-gray-600 mb-4">Ingrese el código de identificación de la mascota.</p>

            <input
                type="text"
                value={scannedId}
                onChange={handleInputChange}
                placeholder="Ingrese el ID de la mascota"
                className="w-80 p-2 border rounded mb-4 text-center"
            />
            <button
                onClick={handleScan}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
                Buscar
            </button>

            {message && <p className="mt-4 text-lg font-semibold text-red-600">{message}</p>}

            {petData && (
                <div className="bg-white p-6 mt-6 rounded-lg shadow-lg w-96">
                    <h3 className="text-2xl font-bold mb-2">Detalles de la Mascota</h3>
                    <p><strong>Nombre:</strong> {petData.petName}</p>
                    <p><strong>Tamaño:</strong> {petData.size}</p>
                    <p><strong>Raza:</strong> {petData.breed}</p>
                    <p><strong>Dueño:</strong> {petData.ownerName}</p>
                    <p><strong>Teléfono:</strong> {petData.ownerPhone}</p>
                    <p><strong>Correo:</strong> {petData.ownerEmail}</p>
                </div>
            )}
        </div>
    );
}

export default ScanQR;
