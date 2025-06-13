import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Identificación inteligente<br /> para tu mascota
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Registra a tu mascota y ayúdala a volver a casa en caso de pérdida.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/register"
                            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
                        >
                            Registrarse
                        </Link>
                        <Link
                            to="/scanQR"
                            className="bg-gray-800 hover:bg-black text-white font-semibold px-6 py-3 rounded-full transition duration-300"
                        >
                            Encontré una Mascota
                        </Link>
                    </div>
                </div>

                {/* Imagen */}
                <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
                    <img
                        src="/mascotin.png"
                        alt="Ilustración Mascotin"
                        className="w-72 h-auto"
                    />
                </div>
            </section>

            {/* Sección extra opcional */}
            <section className="text-center py-16 px-6 bg-gray-50">
                <h2 className="text-3xl font-bold mb-4">
                    Seguridad y tranquilidad para dueños y mascotas
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Al escanear el QR, la persona que encuentre a tu mascota podrá contactarte directamente. Todo en un solo clic.
                </p>
                {/* Acá podrías incluir una imagen de ejemplo de escaneo */}
            </section>
        </div>
    );
}

export default Home;
