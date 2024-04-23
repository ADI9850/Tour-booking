import React from 'react';

const Popular = () => {
    return (
        <div className=" flex flex-col items-center mb-5 mt-10 ">
        <h1 className='mb-8 text-4xl font-bold text-blue-500'>Popular packages</h1>
        <p className='text-center mb-8 text-gray-600 text-lg w-3/4'>Travelling abroad for a holiday is a great thing but there isn’t anything that beats the diversity of landscapes and cultures in India. We inspire local travellers to travel more in India, as our India holiday packages acquaint travellers with the incredible beauty of the country. Take a look at top selling holiday packages in India.</p>
            <div className="w-3/4 ">
                {/* First Card */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex ">
                    {/* Image on the left */}
                    <div className="w-1/3 ">
                        <img src='photos/image1.jpeg' alt='im' />
                    </div>
                    {/* Content on the right */}
                    <div className="w-1/2 p-5 ml-10">
                        <h2 className="text-2xl text-center text-orange-500 font-bold mb-2">Kerala</h2>
                        <p className='mt-5'>A Trip To Kerala Is Always An Experience Through Greenery To The Hills And Its Climate. Browse Through Our Hand-Picked Kerala Tour Packages Prepared For You. Our Experts Are Also Available To Prepare Customised Tourism Packages

</p>
                    </div>
                </div>
            </div>
            <div className="w-3/4 mx-4 mt-7">
                {/* Second Card */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
                    {/* Content on the left */}
                    <div className="w-1/2 p-4">
                        <h2 className="text-2xl text-center text-orange-500 font-bold mb-2">Kullu Manali</h2>
                        <p className='mt-5'>Kullu Manali Shimla Has Always Been A Very Popular Destination For The Old, Young Travelers As Well As Newly Married Couples Who Look For Cheapest Manali Tour Packages & Manali Honeymoon Packages To Experience The Perfect Solitude And Calmness At Its Best. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    {/* Image on the right */}
                    <div className="w-1/3 ml-10">
                        <img src="photos/image2.jpeg" alt="im" className="object-cover h-full w-full" />
                    </div>
                </div>
            </div>
            <div className="w-3/4 mx-4 mt-7">
                {/* Third Card */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
                    {/* Image on the left */}
                    <div className="w-1/3">
                        <img src="photos/image3.jpeg" alt="im" className="object-cover h-full w-full" />
                    </div>
                    {/* Content on the right */}
                    <div className="w-1/2 p-5 ml-10">
                        <h2 className="text-2xl text-center text-orange-500 font-bold mb-2">Rajasthan</h2>
                        <p className='mt-5'> We Organise Jaipur & Rajasthan Tours That Offer Incredible Attractions Like Forts And Palaces, Deserts, Traditional Villages, Colorful Cattle Fairs, Sacred Places, Camel Safaris, Beautiful Lakes, Hill Stations And The People.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;

