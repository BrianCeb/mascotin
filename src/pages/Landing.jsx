import MascotinCarrusel from '../components/MascotinCarrusel';

const Landing = () => {
    return (
        <main>
            {/* Carrusel principal */}
            <MascotinCarrusel />

            {/* Sección informativa debajo del carrusel */}
            <section className="py-16 px-6 bg-white text-center">
                <h3 className="text-2xl font-bold mb-4">¿Cómo funciona Mascotin?</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Registrás tu mascota, generás un QR único y lo colocás en su collar.
                    Si se pierde, cualquiera que lo encuentre puede escanear el código y
                    contactarte directamente. Sin apps, sin complicaciones.
                </p>

                <div className="mt-10 flex justify-center gap-8 flex-wrap">
                    <div className="max-w-xs p-4 shadow-md rounded-lg border">
                        <h4 className="font-semibold text-lg mb-2">Fácil de registrar</h4>
                        <p className="text-sm text-gray-600">En minutos cargás sus datos y foto.</p>
                    </div>
                    <div className="max-w-xs p-4 shadow-md rounded-lg border">
                        <h4 className="font-semibold text-lg mb-2">QR único</h4>
                        <p className="text-sm text-gray-600">Cada mascota tiene su código identificador.</p>
                    </div>
                    <div className="max-w-xs p-4 shadow-md rounded-lg border">
                        <h4 className="font-semibold text-lg mb-2">Sin apps</h4>
                        <p className="text-sm text-gray-600">Solo escaneás el QR desde cualquier celular.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Landing;
