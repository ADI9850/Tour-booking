import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    numberOfPeople: '',
    preferredDate: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to backend, display confirmation message, etc.)
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Book Your Tour</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4" />
          </div>
          <div>
            <label htmlFor="numberOfPeople" className="block text-gray-700">Number of People</label>
            <input type="number" id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4" />
          </div>
          <div>
            <label htmlFor="preferredDate" className="block text-gray-700">Preferred Date</label>
            <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4" />
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-gray-700">Additional Information</label>
            <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows="3" className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md py-2 px-4"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;

