import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-00 py-12 ">
      <div className="max-w-6xl mx-auto px-4 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:mr-8">
            <img src="/photos/contact.jpg" alt="Contact Us" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 mx-5 text-center">
            <p className="text-lg text-gray-700 mb-4 text-center">
              Have questions or inquiries about our tours? Feel free to reach out to us! Our dedicated team is here to assist you with any queries you may have.
            </p>
            <p className="text-xl text-gray-800 mb-4 font-bold mt-5 ">
              <span className='text-orange-400 '>Email :</span> info@tours.com
            </p>
            <p className="text-xl text-gray-800 mb-4 font-bold ">
            <span className='text-orange-400 '>Phone :</span> +1 (123) 456-7890
            </p>
            <p className="text-xl text-gray-800 mb-4 font-bold ">
            <span className='text-orange-400 '>Address :</span> 123 Main Street,India
            </p>
            <p className="text-lg text-gray-700 mb-4 mt-8">
              Follow us on social media for updates, travel inspiration, and exclusive offers:
            </p>
            <div className="flex justify-around text-center mt-10">
           <span className=''> <img src='/photos/facebook.png' alt='facebook' className='w-10 mx-5'/>
              <a href="#" className="text-blue-500 hover:underline">Facebook</a></span>
              
            <span>  <img src='/photos/instagram.png' alt='instagram' className='w-10 mx-5'/>
              <a href="#" className="text-blue-500 hover:underline">Instagram</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
