// AdventureIdea.js
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Popular from "./Popular";
import Benifits from "./Benifits";
import Carousel from "./Carousal";
import Upcoming from "./Upcoming";
import Review from "./Review";

const AdventureIdea = () => {
  const ideas = [
    {
      title: "Holiday Special",
      description:
        "Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.",
      image: "/photos/image14.jpg",
    },
    {
      title: "Jungle Safari",
      description:
        "A zip-line, zip line, zip-wire, or flying fox is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope.",
      image: "/photos/image6.jpg",
    },
    {
      title: "Spirutal Tour",
      description:
        "Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.",
      image: "/photos/temple.jpg",
    },
    {
      title: "Camping",
      description:
        "Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.",
      image: "/photos/image21.jpg",
    },
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
    <>
      <Carousel />
      <Upcoming />

      <section
        ref={sectionRef}
        className="category mt-10  bg-gray-600 scroll-smooth focus:scroll-auto"
        id="category"
      >
        <p className="text-center font-bold text-2xl text-orange-500">
          Our Tours! ----
        </p>
        <h1 className="text-center font-bold text-4xl mt-4 mb-6">
          Explore Our <span className="text-orange-500">Packages</span>
        </h1>
        <p className="text-center mx-auto mb-10 text-white text-lg w-3/5  ">
          Travelling abroad for a holiday is a great thing but there isn’t
          anything that beats the diversity of landscapes and cultures in India.
          We inspire local travellers to travel more in India, as our India
          holiday packages acquaint travellers with the incredible beauty of the
          country. Take a look at top selling holiday packages in India.
        </p>
        <div className="flex justify-center">
          <div
            className={`box-container grid grid-cols-1 md:grid-cols-4 gap-8 shadow-lg  px-4 py-4  ${
              isVisible ? "animate-slideLeft " : ""
            }`}
          >
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="box  w-72  text-center bg-white rounded-lg  shadow-lg shadow-gray-500 m-auto mb-3 "
              >
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full  mb-4 rounded-md "
                />
                <h3 className="text-2xl  font-extrabold mb-2">{idea.title}</h3>
                <p className="mt-3 px-2">{idea.description}</p>
                <div>
                  {index === 0 && (
                    <Link to="/holiday">
                      <button className="bg-orange-400  rounded-full w-32 text-white  font-bold mt-5 mb-1">
                        Explore
                      </button>
                    </Link>
                  )}
                  {index === 1 && (
                    <Link to="/jungle">
                      <button className="bg-orange-400  rounded-full w-32 text-white  font-bold mt-5 mb-1">
                        Explore
                      </button>
                    </Link>
                  )}

                  {index === 2 && (
                    <Link to="/spirutal">
                      <button className="bg-orange-400  rounded-full w-32 text-white  font-bold mt-5 mb-1">
                        Explore
                      </button>
                    </Link>
                  )}
                  {index === 3 && (
                    <Link to="/camping">
                      <button className="bg-orange-400  rounded-full w-32 text-white  font-bold mt-5 mb-1">
                        Explore
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Benifits />
      <Popular />
      <Review />
    </>
  );
};

export default AdventureIdea;
