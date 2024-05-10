import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";

const Holiday = () => {
  const ideas = [
    {
      title: "Himachal",
      description:
        "Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.",
      image: "/photos/image5.jpeg",
      price: "10999",
    },
    {
      title: "Kashmir",
      description:
        "A zip-line, zip line, zip-wire, or flying fox is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope.",
      image: "/photos/image11.jpg",
      price: "9999",
    },
    {
      title: "Rajasthan",
      description:
        "Canoeing is an activity which involves paddling a canoe with a single-bladed paddle.",
      image: "/photos/image3.jpeg",
      price: "8999",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center mb-10 mt-10">
        <h1 className="mb-8 text-4xl font-bold text-orange-500">
          Holiday Special
        </h1>
        {ideas.map((idea, index) => (
          <div key={index} className="w-full md:w-3/4 lg:w-1/2 mb-8">
            <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden flex text-white">
              <div className="w-1/2">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-1/2 p-5 ml-5 text-center">
                <div className="flex items-center mb-3">
                  <h2 className="text-3xl text-white font-extrabold">
                    {idea.title}
                  </h2>
                </div>
                <p>{idea.description}</p>
                <div className="flex flex-col sm:flex-row justify-around mt-5 ">
                  <p className="lg:w-26 sm:w-auto h-10 mt-1 rounded-full text-xl p-2 font-bold bg-white text-orange-400">
                    {`₹${idea.price}`}
                  </p>
                  <Link to="/booking">
                    <button className="lg:w-26 sm:w-auto h-10 p-3 mt-1 text-lg text-white font-bold bg-orange-400 rounded-full">
                      Book now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Services />
    </>
  );
};

export default Holiday;

