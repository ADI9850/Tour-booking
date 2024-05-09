import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Popular = () => {
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

  const popularPackages = [
    {
      title: "Kerala",
      image: "photos/image1.jpeg",
      description:
        "A Trip To Kerala Is Always An Experience Through Greenery To The Hills And Its Climate. Browse Through Our Hand-Picked Kerala Tour Packages Prepared For You. Our Experts Are Also Available To Prepare Customised Tourism Packages",
      price: "$8500",
    },
    {
      title: "Kullu Manali",
      image: "photos/image2.jpeg",
      description:
        "Kullu Manali Shimla Has Always Been A Very Popular Destination For The Old, Young Travelers As Well As Newly Married Couples Who Look For Cheapest Manali Tour Packages & Manali Honeymoon Packages To Experience. ",
      price: "$9500",
    },
    {
      title: "Rajasthan",
      image: "photos/image3.jpeg",
      description:
        "We Organise Jaipur & Rajasthan Tours That Offer Incredible Attractions Like Forts And Palaces, Deserts, Traditional Villages, Colorful Cattle Fairs, Sacred Places, Camel Safaris, Beautiful Lakes, Hill Stations And The People.",
      price: "$9000",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center mb-5 mt-10 ${
        isVisible ? "animate-slideLeft" : ""
      }`}
    >
      <p className="text-2xl font-bold text-orange-500">Popular Packages ---</p>
      <h1 className="mb-8 text-4xl font-bold mt-4 text-center">
        Explore <span className="text-orange-500">Popular</span> Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
        {popularPackages.map((tour, index) => (
          <div
            key={index}
            className=" shadow-md rounded-lg overflow-hidden  bg-gray-700 text-white "
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="object-cover w-full lg:h-72 sm:h-48 sm:w-auto"
            />
            <div className="p-5">
              <h2 className="text-3xl text-center font-extrabold mb-2">
                {tour.title}
              </h2>
              <p className="mt-5 text-lg">{tour.description}</p>
              <div className="flex justify-around mt-8">
                <Link to="/contact">
                  {" "}
                  <button className="bg-orange-400 rounded-full w-40 text-xl p-1 text-white font-bold">
                    Enquire Now
                  </button>
                </Link>
                <p className="text-center text-2xl font-bold bg-white text-orange-400 rounded-full w-40">
                  {tour.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
