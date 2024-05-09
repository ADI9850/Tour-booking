import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const tours = [
    { src: "/photos/image8.jpg ", text: "Summer Special" },
    { src: "/photos/image19.jpg", text: "Holiday Special" },
    { src: "/photos/image18.jpg", text: "Honeymoon Special" },
    { src: "/photos/image15.jpg", text: "Regional Special" },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection =
        scrollTop > sectionRef.current.offsetTop - window.innerHeight / 2;
      setIsVisible(scrollDirection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={sectionRef} className="flex flex-col mt-5 bg-gray-100">
      <p className="text-2xl text-orange-500 font-bold text-center">
        Upcoming Tours---
      </p>
      <p className="text-4xl font-bold text-center mt-4">
        Explore Our <span className="text-orange-500"> Tours </span>
      </p>
      <div
        className={`flex flex-col md:flex-row items-center mx-auto w-full md:w-2/3 mt-8 shadow-lg shadow-black bg-white mb-5 overflow-hidden ${
          isVisible ? "animate-slideLeft" : ""
        }`}
      >
        <div
          className={`text-center mb-6 w-full md:w-1/2 tracking-wider ${
            isVisible ? "animate-slideLeft" : ""
          }`}
        >
          <span className="text-blue-400 font-extrabold text-2xl">
            SUMMER VACATION WITH YOUR FAMILY.
          </span>
          <p className="text-lg mt-8">Don't let go of your chance of a</p>
          <p className="mt-2 text-lg">
            Explore iconic cities, rich history, and incredible landscapes
            across European cities. Limited-time offers packed with adventure
            and savings.
          </p>
          <Link to="/contact">
            {" "}
            <button className="bg-orange-400 rounded-full w-40 h-10 font-extrabold mt-3 text-white">
              Enquire Now
            </button>
          </Link>
        </div>
        <div
          className={`flex flex-wrap justify-center w-full md:w-1/2 overflow-x-auto md:overflow-visible overscroll-x-auto md:overscroll-hidden ${
            isVisible ? "animate-fadeIn" : ""
          }`}
        >
          {tours.map((tour, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden w-60 h-56 m-1"
            >
              <img src={tour.src} alt="Upcoming" className="w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-orange-500 font-bold text-xl text-center ">
                  {tour.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
