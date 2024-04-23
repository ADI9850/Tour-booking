import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        { src: 'photos/image8.jpg', text: 'First Image' },
        { src: 'photos/image9.jpg', text: 'Second Image' },
        { src: 'photos/image11.jpg', text: 'Third Image' }
    ];

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Change 3000 to your desired interval in milliseconds

        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide]); // Run effect whenever currentSlide changes

    return (
        <div id="default-carousel" className="relative w-full " data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Carousel items */}
                {images.map((image, index) => (
                    <div key={index} className={`duration-300 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`} data-carousel-item>
                        <img src={image.src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Carousel Image`} />
                        <div className="absolute top-5 left-0 right-0 text-center text-white font-bold">{image.text}</div>
                    </div>
                ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
                    <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`} aria-current={index === currentSlide} aria-label={`Slide ${index + 1}`} onClick={() => goToSlide(index)}></button>
                ))}
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
                {/* Left arrow SVG */}
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
                {/* Right arrow SVG */}
            </button>
        </div>
    );
};

export default Carousel;

