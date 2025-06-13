import { Link } from "react-router-dom";
import { PencilIcon, QrCodeIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import MascotinCarrusel from "../components/MascotinCarrusel";

function Landing() {
    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* CARRUSEL INICIAL */}
            <MascotinCarrusel />

            {/* HERO */}
            <section className="py-20 px-6 bg-pink-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Texto */}
                    <div className="md:w-1/2 flex justify-center">
                        <img src="/mascotin.png" alt="Mascota ilustración" className="w-72 h-auto" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight">Nunca pierdas a tu mejor amigo.</h1>
                        <p className="text-xl mb-8 text-gray-700">
                            Con <strong>Mascotin</strong>, tu mascota lleva su identificación única con QR. Si se pierde, quien la encuentre puede contactarte al instante.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <Link to="/register" className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition">
                                Registrá tu mascota
                            </Link>
                            <Link to="/scanQR" className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-black transition">
                                Encontré una mascota
                            </Link>
                        </div>
                    </div>

                    {/* Imagen de referencia */}
                    
                </div>
            </section>

            {/* ¿QUÉ ES MASCOTIN? + ¿CÓMO FUNCIONA? */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* ¿QUÉ ES MASCOTIN? */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-left">¿Qué es Mascotin?</h2>
                        <p className="text-lg text-gray-700 text-left">
                            <strong>Mascotin</strong> es una solución moderna de identificación para mascotas. Cada animal lleva una chapa con un QR único. Al escanearlo, se accede a su perfil donde quien lo encuentre puede contactarte directamente. Sin apps, sin complicaciones.
                        </p>
                    </div>

                    {/* ¿CÓMO FUNCIONA? */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold mb-2 text-right">¿Cómo funciona?</h2>
                        <div className="flex items-start justify-end gap-4">
                            <div className="text-right">
                                <h3 className="font-semibold">1. Registrá a tu mascota</h3>
                                <p className="text-sm text-gray-600">Completá un formulario con sus datos y tu contacto.</p>
                            </div>
                            <PencilIcon className="h-8 w-8 text-pink-600" />
                        </div>
                        <div className="flex items-start justify-end gap-4">
                            <div className="text-right">
                                <h3 className="font-semibold">2. Recibí el QR</h3>
                                <p className="text-sm text-gray-600">Te entregamos una chapa con código QR vinculado a su perfil.</p>
                            </div>
                            <QrCodeIcon className="h-8 w-8 text-pink-600" />
                        </div>
                        <div className="flex items-start justify-end gap-4">
                            <div className="text-right">
                                <h3 className="font-semibold">3. ¡Listo!</h3>
                                <p className="text-sm text-gray-600">Cualquiera puede escanearlo y avisarte si tu mascota se pierde.</p>
                            </div>
                            <ArrowPathIcon className="h-8 w-8 text-pink-600" />
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="py-20 px-6 bg-pink-50 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-10">¿Por qué usar Mascotin?</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left text-lg text-gray-700">
                        <div className="flex items-start gap-3">
                            <span className="text-pink-600 text-xl">🐾</span>
                            <p><strong>Reencuentros más rápidos y seguros</strong><br />Tu mascota puede volver con vos en minutos.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-pink-600 text-xl">📱</span>
                            <p><strong>Sin apps necesarias</strong><br />Cualquier persona puede escanear el código QR con su celular.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-pink-600 text-xl">📝</span>
                            <p><strong>Personalizable</strong><br />Incluye datos de salud, contacto, fotos y más.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-pink-600 text-xl">✈️</span>
                            <p><strong>Ideal para paseos y viajes</strong><br />Perfecto para mascotas aventureras o en tránsito.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIOS */}
            <section className="py-20 px-6 bg-white text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Ellos ya están protegidos</h2>
                    <p className="text-lg mb-6 text-gray-700">
                        Más de 500 mascotas ya están identificadas con Mascotin. Sumate a la comunidad que protege a sus compañeros con tecnología y amor.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
                        <div className="bg-pink-100 p-6 rounded-lg shadow w-80">
                            <p className="italic">“Gracias a Mascotin recuperamos a Tomy en menos de 2 horas.”</p>
                            <span className="block mt-2 font-semibold text-pink-700">– Mariana</span>
                        </div>
                        <div className="bg-pink-100 p-6 rounded-lg shadow w-80">
                            <p className="italic">“Una solución simple y efectiva. ¡Gracias!”</p>
                            <span className="block mt-2 font-semibold text-pink-700">– Federico</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 px-6 bg-pink-600 text-white text-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Cuidá lo que más querés</h2>
                    <p className="text-lg mb-6">Registrá a tu mascota hoy y asegurate de que siempre pueda volver a casa.</p>
                    <Link to="/register" className="bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                        Empezar ahora
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Landing;