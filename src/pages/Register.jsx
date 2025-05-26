import { useState, useEffect } from "react";

function Register() {
    const [step, setStep] = useState(1);
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({
        petName: "",
        size: "",
        breed: "",
        ownerName: "",
        ownerPhone: "",
        ownerEmail: "",
        petId: "",
        image: "",
    });

    useEffect(() => {
        setFormData({
            petName: "",
            size: "",
            breed: "",
            ownerName: "",
            ownerPhone: "",
            ownerEmail: "",
            petId: "",
            image: "",
        });
    }, []);

    const generatePetId = () => {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
        let id = "";
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return "P-" + id;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(reader.result);
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };

            reader.onerror = () => {
                alert("Hubo un problema al leer la imagen.");
                setPreview(null);
                setFormData((prev) => ({ ...prev, image: "" }));
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que la imagen sea válida si fue cargada
        if (formData.image && !formData.image.startsWith("data:image")) {
            alert("Error al cargar la imagen. Intenta seleccionarla nuevamente.");
            return;
        }

        const newPetId = generatePetId();
        const petData = { ...formData, petId: newPetId };

        const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
        savedPets.push(petData);
        localStorage.setItem("pets", JSON.stringify(savedPets));

        setFormData({ ...formData, petId: newPetId });
        alert(`¡Mascota registrada con ID: ${newPetId}!`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-4">Registro de Mascota</h2>
            <form className="bg-white p-6 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
                {step === 1 && (
                    <>
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

                        <label className="block mb-2">Foto de la mascota:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full mb-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
                        />

                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
                        >
                            Siguiente
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
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

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                            >
                                Atrás
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                            >
                                Registrar Mascota
                            </button>
                        </div>
                    </>
                )}
            </form>

            {preview && (
                <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Imagen cargada:</h3>
                    <img
                        src={preview}
                        alt="Mascota"
                        className="w-40 h-40 object-cover rounded-full mx-auto shadow-md border-4 border-pink-200"
                    />
                </div>
            )}

            {formData.petId && (
                <div className="mt-6 text-center">
                    <p className="text-green-600 font-semibold">ID generado: {formData.petId}</p>
                    <a
                        className="text-blue-600 underline"
                        href={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.origin}/pet/${formData.petId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver QR
                    </a>
                </div>
            )}
        </div>
    );
}

export default Register;
