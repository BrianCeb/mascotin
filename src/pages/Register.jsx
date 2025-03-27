import { useState, useEffect } from "react";

function Register() {
    const [formData, setFormData] = useState({
        petName: "",
        size: "",
        breed: "",
        ownerName: "",
        ownerPhone: "",
        ownerEmail: "",
        petId: "",
    });

    // Cargar datos previos desde localStorage al iniciar
    useEffect(() => {
        const savedData = localStorage.getItem("petData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Generar un ID único
    const generatePetId = () => {
        return "PET-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    };

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPetId = generatePetId();
        const petData = { ...formData, petId: newPetId };

        // Guardar en localStorage
        localStorage.setItem("petData", JSON.stringify(petData));

        setFormData(petData);
        alert(`¡Mascota registrada con ID: ${newPetId}!`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-4">Registro de Mascota</h2>
            <form className="bg-white p-6 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
                <label className="block mb-2">Nombre de la Mascota:</label>
                <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                />

                <label className="block mb-2">Tamaño:</label>
                <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                >
                    <option value="">Seleccione...</option>
                    <option value="Pequeño">Pequeño</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                </select>

                <label className="block mb-2">Raza:</label>
                <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                />

                <label className="block mb-2">Nombre del Dueño:</label>
                <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                />

                <label className="block mb-2">Teléfono del Dueño:</label>
                <input
                    type="tel"
                    name="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                />

                <label className="block mb-2">Correo del Dueño:</label>
                <input
                    type="email"
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Registrar Mascota
                </button>
            </form>

            {formData.petId && (
                <p className="mt-4 text-green-600 font-semibold">ID de la Mascota: {formData.petId}</p>
            )}
        </div>
    );
}

export default Register;
