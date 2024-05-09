import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      src: "photos/image13.jpg",
      text: "Plan an unforgettable trip from your city",
    },
    {
      src: "photos/temple3.jpg",
      text: "Experience our special tours, uniquely created to suit all your preferences.",
    },
    {
      src: "photos/gate.jpg",
      text: "Be part of an adventurous journey that brings you closer to nature.",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="mx-auto relative h-96 md:h-72 lg:h-96 w-11/12 overflow-hidden rounded-md mt-1">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-300 ease-in-out ${
              index === currentSlide ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={image.src}
              className="absolute inset-0 w-full h-full object-cover opacity-90 "
              alt={`Carousel Image`}
            />
            <div
              className={`absolute inset-0 flex  flex-col w-1/3  items-center justify-center bg-black bg-opacity-60  text-center font-bold dark:text-blue-300 text-lg   p-4 md:text-xl lg:text-2xl xl:text-3xl ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {image.text}
              <button className="mt-8 text-xl bg-orange-500 text-white p-2 rounded-md">
                {" "}
                Exclusive Offers
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none left-0"
        data-carousel-prev
        onClick={prevSlide}
      ></button>
      <button
        type="button"
        className="absolute top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none right-0"
        data-carousel-next
        onClick={nextSlide}
      ></button>
    </div>
  );
};

export default Carousel;
