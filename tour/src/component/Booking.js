import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    numberOfPeople: "",
    preferredDate: "",
    additionalInfo: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-lg mx-auto px-4 shadow-lg shadow-black bg-violet-200 border-2 border-gray-500">
        <h2 className="text-3xl font-bold text-center text-orange-500 mt-4 mb-8">
          Book Your Tour
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="">
            <label htmlFor="fullName" className="block text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4 hover:bg-slate-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4 hover:bg-slate-100"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-800">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4 hover:bg-slate-100"
            />
          </div>
          <div>
            <label htmlFor="numberOfPeople" className="block text-gray-800">
              Number of People
            </label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4 hover:bg-slate-100"
            />
          </div>
          <div>
            <label htmlFor="preferredDate" className="block text-gray-800">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4 hover:bg-slate-100"
            />
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-gray-800">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="3"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4 hover:bg-slate-100"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-2 hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className=" bg-slate-100 border-4 border-gray-800 p-5 w-1/2 rounded-lg text-center ">
            <h3 className=" text-3xl font-bold mb-4 text-orange-400">
              Thank You for Booking!
            </h3>
            <p className="text-green-600 text-lg">
              Your booking has been confirmed.
            </p>

            <img
              src="/photos/booked.jpg"
              alt="Popup Image"
              className="mt-4 w-full h-80"
            />
            <button
              onClick={handleClosePopup}
              className="block mx-auto mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
