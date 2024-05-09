import React from "react";

const About = () => {
  const team = [
    {
      image: "/photos/team-1.jpg",
      names: "Aman",
      designation: "Founder & CEO",
    },
    {
      image: "/photos/team-3.jpg",
      names: "Namita",
      designation: "Founder & Product officer",
    },
    {
      image: "/photos/team-2.jpg",
      names: "Anupam",
      designation: "Founder & Chairperson",
    },
    {
      image: "/photos/team-4.jpg",
      names: "Gajhal",
      designation: "Founder & CTO",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 py-12 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center shadow-md">
            <div className="  md:w-1/2 md:mr-8 ">
              <img
                src="/photos/about.jpg"
                alt="About Us"
                className="w-full h- rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 ">
              <p className="text-lg text-gray-700 mb-4">
                Welcome to{" "}
                <span className="font-bold text-blue-500">TOURS</span>, your
                ultimate destination for unforgettable travel experiences. At
                Tourify, we believe that every journey should be filled with
                excitement, discovery, and cherished memories. Our passion for
                travel drives us to curate exceptional tours that cater to every
                traveler's wanderlust.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission at TOURS is to provide our customers with enriching
                travel experiences that exceed their expectations. We strive to
                create unforgettable moments and forge lasting connections with
                the destinations we visit.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Behind every successful journey is a dedicated team of
                professionals committed to making your travel dreams a reality.
                Our team comprises passionate travel enthusiasts, destination
                experts, and customer service professionals who are here to
                assist you every step of the way.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Ready to embark on your next adventure? Contact us today to
                start planning your dream vacation with TOURS. Let us help you
                create memories that will last a lifetime.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center mt-14 bg-gray- py-4 shadow-lg ">
            <h1 className="text-center font-bold text-4xl  mb-10">Our Team</h1>
            <div className="w-3/4  lg:flex-row sm:flex flex-col ">
              {team.map((teams, index) => (
                <div
                  key={index}
                  className="shadow-lg shadow-black text- px-2 border-2 mx-2 mt-2"
                >
                  <img
                    src={teams.image}
                    alt={teams.title}
                    className="w-80 h-60 hover:bg-white"
                  />
                  <p className="text-center text-lg font-extrabold ">
                    {teams.names}
                  </p>
                  <p className="w-60 text-center mt-2">{teams.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
