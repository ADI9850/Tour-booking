import React, { useState } from 'react';

const Booking = () => {
    const [formData, setFormData] = useState({
        numberOfPersons: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, like sending data to backend or storing in state
        console.log(formData);
    };

    return (
        <div className="container mx-auto mt-5 ">
       
            <h1 className="text-3xl text-center text-blue-500 font-bold mb-10">Tour Booking</h1>
       
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        
                <div className="mb-4">
                    <label htmlFor="numberOfPersons" className="block text-gray-700 font-semibold mb-2">Number of Persons</label>
                    <input type="number" id="numberOfPersons" name="numberOfPersons" value={formData.numberOfPersons} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-5">Book Now</button>
            </form>
        </div>
    );
};

export default Booking;
