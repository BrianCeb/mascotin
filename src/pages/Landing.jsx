import { Link } from "react-router-dom";
import { PencilIcon, QrCodeIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import MascotinCarrusel from "../components/MascotinCarrusel"; // Asegurate que esté bien la ruta

function Landing() {
    return (
        <div className="bg-pink-50 text-gray-800 font-sans">
            {/* CARRUSEL INICIAL */}
            <MascotinCarrusel />

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
                <h1 className="text-5xl font-bold mb-4">Nunca pierdas a tu mejor amigo.</h1>
                <p className="text-xl mb-6 max-w-xl">
                    Con <strong>Mascotin</strong>, tu mascota lleva su identificación única con QR.
                    Si se pierde, quien la encuentre puede contactarte al instante.
                </p>
                <div className="flex space-x-4">
                    <Link
                        to="/register"
                        className="bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition"
                    >
                        Registrá tu mascota
                    </Link>
                    <Link
                        to="/scanQR"
                        className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
                    >
                        Encontré una mascota
                    </Link>
                </div>
            </section>

            {/* ¿QUÉ ES MASCOTIN? */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">La identificación moderna para mascotas</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Con <strong>Mascotin</strong>, tu perro o gato lleva una chapa con código QR.
                    Al escanearlo, se accede a un perfil donde quien lo encuentre puede contactarte directamente.
                    Es rápido, seguro y sin apps ni complicaciones.
                </p>
            </section>

            {/* CÓMO FUNCIONA */}
            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-4xl font-bold mb-6">¿Cómo funciona?</h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center">
                        <PencilIcon className="h-12 w-12 text-pink-600 mb-2" />
                        <h3 className="text-xl font-bold mb-2">1. Registrá a tu mascota</h3>
                        <p>Completá un formulario con sus datos y tu contacto.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <QrCodeIcon className="h-12 w-12 text-pink-600 mb-2" />
                        <h3 className="text-xl font-bold mb-2">2. Recibí el QR</h3>
                        <p>Generamos una chapa con un código único enlazado a su perfil.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ArrowPathIcon className="h-12 w-12 text-pink-600 mb-2" />
                        <h3 className="text-xl font-bold mb-2">3. Listo para volver</h3>
                        <p>Quien la encuentre escanea el QR, ve sus datos y te avisa.</p>
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">¿Por qué usar Mascotin?</h2>
                <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left text-lg">
                    <li>✅ Reencuentros más rápidos y seguros</li>
                    <li>✅ Sin apps: cualquier persona puede escanear el código</li>
                    <li>✅ Personalizable: incluye datos de salud, contacto y fotos</li>
                    <li>✅ Ideal para paseos, viajes o mascotas aventureras</li>
                </ul>
            </section>

            {/* TESTIMONIOS */}
            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-4xl font-bold mb-4">Ellos ya están protegidos</h2>
                <p className="text-lg mb-6">
                    Más de 500 mascotas ya están identificadas con Mascotin. Sumate a la comunidad que protege a sus compañeros con tecnología y amor.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                    <div className="bg-pink-100 p-4 rounded-lg shadow w-72">
                        <p>“Gracias a Mascotin recuperamos a Tomy en menos de 2 horas.”</p>
                        <span className="block mt-2 font-semibold">– Mariana</span>
                    </div>
                    <div className="bg-pink-100 p-4 rounded-lg shadow w-72">
                        <p>“Una solución simple y efectiva. ¡Gracias!”</p>
                        <span className="block mt-2 font-semibold">– Federico</span>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-16 px-6 bg-pink-600 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">Cuidá lo que más querés</h2>
                <p className="text-lg mb-6">
                    Registrá a tu mascota hoy y asegurate de que siempre pueda volver a casa.
                </p>
                <Link
                    to="/register"
                    className="bg-white text-pink-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                    Empezar ahora
                </Link>
            </section>
        </div>
    );
}

export default Landing;
