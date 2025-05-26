import { Link } from "react-router-dom";
import { PencilIcon, QrCodeIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import MascotinCarrusel from "../components/MascotinCarrusel";

function Landing() {
    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* CARRUSEL INICIAL */}
            <MascotinCarrusel />

            {/* HERO */}
            <section className="py-16 px-6 text-center bg-pink-50">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6">Nunca pierdas a tu mejor amigo.</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Con <strong>Mascotin</strong>, tu mascota lleva su identificación única con QR. Si se pierde, quien la encuentre puede contactarte al instante.
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
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
                    <h2 className="text-4xl font-bold mb-8">¿Por qué usar Mascotin?</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-left text-lg text-gray-700">
                        <div>✅ Reencuentros más rápidos y seguros</div>
                        <div>✅ Sin apps: cualquier persona puede escanear el código</div>
                        <div>✅ Personalizable: incluye datos de salud, contacto y fotos</div>
                        <div>✅ Ideal para paseos, viajes o mascotas aventureras</div>
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
                            <p>“Gracias a Mascotin recuperamos a Tomy en menos de 2 horas.”</p>
                            <span className="block mt-2 font-semibold">– Mariana</span>
                        </div>
                        <div className="bg-pink-100 p-6 rounded-lg shadow w-80">
                            <p>“Una solución simple y efectiva. ¡Gracias!”</p>
                            <span className="block mt-2 font-semibold">– Federico</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-16 px-6 bg-pink-600 text-white text-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Cuidá lo que más querés</h2>
                    <p className="text-lg mb-6">Registrá a tu mascota hoy y asegurate de que siempre pueda volver a casa.</p>
                    <Link
                        to="/register"
                        className="bg-white text-pink-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                    >
                        Empezar ahora
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Landing;
