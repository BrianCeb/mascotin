import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: '/assets/corriendo.png',
        title: '“Libre y feliz. Pero siempre identificado.”',
        subtitle: 'Con Mascotin, tu mascota explora el mundo sin perder el rumbo.',
    },
    {
        id: 2,
        image: '/assets/triste.png',
        title: '“Cuando más te necesita, Mascotin lo conecta con vos.”',
        subtitle: 'El QR en su placa puede cambiar su destino.',
    },
    {
        id: 3,
        image: '/assets/reencuentro.png',
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

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            {slide.title}
                        </h2>
                        <p className="text-lg sm:text-xl text-white mb-6 drop-shadow">
                            {slide.subtitle}
                        </p>
                        <Link
                            to="/registro"
                            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
                        >
                            Registrá a tu mascota
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MascotinCarrusel; 
