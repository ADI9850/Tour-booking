import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Accommodation",
    image: "/photos/accomodation1.png",
    description:
      "Comfortable & convenient hotels cherry-picked by our hotel management team",
  },
  {
    title: "All Meals",
    image: "/photos/breakfast.png",
    description: "Eat to your heart's content Breakfast. Lunch. Dinner.",
  },
  {
    title: "Transport",
    image: "/photos/transport.png",
    description:
      "Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension-free",
  },
  {
    title: "Tour Manager",
    image: "/photos/man.png",
    description:
      "Comfortable & convenient hotels cherry-picked by our hotel management team",
  },
  {
    title: "Customer Support",
    image: "/photos/customer.png",
    description: "Eat to your heart's content Breakfast. Lunch. Dinner.",
  },
  {
    title: "Available In",
    image: "/photos/countries.png",
    description:
      "Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension-free",
  },
];

const Benefits = () => {
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
    <div
      ref={sectionRef}
      className="flex flex-col items-center mt-14 bg-gray-200 py-4  shadow-lg border-4"
    >
      <p className="text-center font-bold text-2xl text-orange-500">
        Services---
      </p>
      <h1 className="text-center font-bold text-4xl mt-4 mb-10 sm:text-center">
        Explore Our <span className="text-orange-500">Services </span>
      </h1>
      <div
        className={`flex flex-wrap  justify-center space-x-4 sm:flex sm:justify-center ${
          isVisible ? "animate-slideLeft " : ""
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="transform transition-transform duration-500"
          >
            <div className="shadow-lg shadow-gray-500 w-96 h-64  my-3 sm:mx-2 bg-white rounded-lg hover:bg-orange-400 hover:text-white">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 mx-auto mt-3  rounded-3xl border-4 border-orange-500 px-3 py-3 bg-white"
              />
              <p className="text-center text-lg font-bold mt-5">
                {service.title}
              </p>
              <p className="w-80 mx-auto mt-5 text-center">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
