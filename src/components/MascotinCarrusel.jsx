import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: '/corriendo1.png',
        title: '“Libre y feliz. Pero siempre identificado.”',
        subtitle: 'Con Mascotin, tu mascota explora el mundo sin perder el rumbo.',
    },
    {
        id: 2,
        image: '/triste1.png',
        title: '“Cuando más te necesita, Mascotin lo conecta con vos.”',
        subtitle: 'El QR en su placa puede cambiar su destino.',
    },
    {
        id: 3,
        image: '/reencuentro3.png',
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
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-black overflow-hidden">
            {/* Imagen contenida y centrada */}
            <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover"
            />

            {/* Overlay con texto */}
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {slide.title}
                </h2>
                <p className="text-sm sm:text-base text-white mb-4 drop-shadow">
                    {slide.subtitle}
                </p>
                <Link
                    to="/register"
                    className="bg-pink-400 hover:bg-pink-500 text-black font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-300 text-sm"
                >
                    Registrá a tu mascota
                </Link>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === current ? 'bg-pink-400' : 'bg-white/50'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default MascotinCarrusel;
