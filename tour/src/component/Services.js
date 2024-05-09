import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Adventurer",
      image: "/photos/adventurer.png",
    },
    {
      title: "Tour Manager",
      image: "/photos/man.png",
    },

    {
      title: "Accommodation",
      image: "/photos/Accomodation1.png",
    },
    {
      title: "Transportation",
      image: "/photos/vehicles.png",
    },
    {
      title: "Meals",
      image: "/photos/breakfast.png",
    },
    {
      title: "Tour Guide",
      image: "/photos/Guide.png",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10 ">
      <span className="text-orange-500 text-2xl font-bold">Services</span>
      <h1 className="mb-8 text-4xl font-bold mt-3"> With All Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-800 w-2/3  p-4 rounded-2xl ">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center mx-2">
            <img
              src={service.image}
              alt={service.title}
              className="w-24 bg-white p-3 border-4 border-orange-400"
            />
            <p className="mt-2 text-lg text-white font-bold">{service.title}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8  mt-3">
        <h1 className="mb-8 text-4xl font-bold text-orange-500 text-center">
          Why Choose Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Expert Planning
            </h2>
            <p className=" text-lg ">
              Our experienced team meticulously plans every aspect of your tour,
              from transportation and accommodations to sightseeing and
              activities, ensuring a hassle-free and enjoyable experience.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Local Insight
            </h2>
            <p className=" text-lg ">
              We provide insider knowledge and local expertise, offering unique
              insights into each destination's culture, history, and hidden
              gems, enriching your travel experience.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Convenience
            </h2>
            <p className=" text-lg ">
              Save time and energy with our all-inclusive packages that cover
              everything you need for your trip, including accommodations,
              transportation, meals, and guided tours, allowing you to relax and
              focus on making memories.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Safety and Security
            </h2>
            <p className=" text-lg ">
              Your safety is our top priority. We carefully vet all our partners
              and suppliers to ensure high-quality services and maintain
              rigorous safety standards throughout your journey.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Customization
            </h2>
            <p className=" text-lg ">
              We understand that every traveler is unique, which is why we offer
              customizable itineraries tailored to your preferences, interests,
              and budget, allowing you to create your dream vacation.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Value for Money
            </h2>
            <p className=" text-lg ">
              We offer competitive prices and excellent value for money, with no
              hidden fees or surprises, making it easier to budget for your trip
              and maximize your travel budget.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Peace of Mind
            </h2>
            <p className=" text-lg ">
              With our dedicated support team available 24/7, you can travel
              with confidence knowing that assistance is just a phone call away,
              providing you with peace of mind throughout your journey.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Exclusive Experiences
            </h2>
            <p className=" text-lg ">
              Gain access to exclusive experiences, special events, and VIP
              treatment reserved for our guests, allowing you to immerse
              yourself in the local culture and create unforgettable memories.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-500 ">
              Environmental Responsibility
            </h2>
            <p className=" text-lg ">
              We are committed to sustainable tourism practices that minimize
              our environmental impact and support local communities, ensuring
              that future generations can continue to enjoy the beauty of our
              planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
