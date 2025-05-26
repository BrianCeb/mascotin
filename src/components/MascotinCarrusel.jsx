import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: '/corriendo.png',
        title: '“Libre y feliz. Pero siempre identificado.”',
        subtitle: 'Con Mascotin, tu mascota explora el mundo sin perder el rumbo.',
    },
    {
        id: 2,
        image: '/triste.png',
        title: '“Cuando más te necesita, Mascotin lo conecta con vos.”',
        subtitle: 'El QR en su placa puede cambiar su destino.',
    },
    {
        id: 3,
        image: '/reencuentro.png',
        title: '“El momento más esperado. Posible gracias a Mascotin.”',
        subtitle: 'Porque nada se compara a volver a estar juntos.',
    },
];

const MascotinCarrusel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const slide = slides[current];

    return (
        <div
            className="relative w-full h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
        >
            {/* Overlay y texto */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                </h2>
                <p className="text-lg sm:text-xl text-white mb-6 drop-shadow">
                    {slide.subtitle}
                </p>
                <Link
                    to="/register"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
                >
                    Registrá a tu mascota
                </Link>
            </div>
        </div>
    );
};

export default MascotinCarrusel;
