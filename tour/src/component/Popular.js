import React from 'react';

const Popular = () => {
    return (
        <div className=" flex flex-col items-center mb-5 mt-10  ">
        <h1 className='mb-8 text-4xl font-bold text-blue-500'>Popular packages</h1>
       
            <div className="w-3/4 mt-8  bg-gray-800 shadow-md shadow-blue-300  ">
                {/* First Card */}
                <div className=" shadow-md  rounded-lg overflow-hidden flex ">
                    {/* Image on the left */}
                    <div className="w-1/2 ">
                        <img src='photos/image1.jpeg' alt='im' />
                    </div>
                    {/* Content on the right */}
                    <div className="w-1/2 p-5 ml-10 text-white">
                        <h2 className="text-3xl text-center  font-extrabold mb-2">Kerala</h2>
                        <p className='mt-5 mx-auto w-80 text-lg'>A Trip To Kerala Is Always An Experience Through Greenery To The Hills And Its Climate. Browse Through Our Hand-Picked Kerala Tour Packages Prepared For You. Our Experts Are Also Available To Prepare Customised Tourism Packages</p>
                        <div className='flex justify-around mt-8'> 
                        <button className='bg-orange-400 rounded-full w-40  text-white font-bold '>Enquire Now</button>
                        <p className='text-center text-orange-400 text-2xl font-bold rounded-full bg-white w-40'>₹9500</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 mx-4 mt-7 bg-gray-800 shadow-md shadow-blue-300 ">
                {/* Second Card */}
                <div className=" shadow-md  rounded-lg overflow-hidden flex ">
                    {/* Content on the left */}
                    <div className="w-1/2 p-4 text-white ">
                        <h2 className="text-3xl text-center  font-extrabold mb-2">Kullu Manali</h2>
                        <p className='mt-5 mx-auto w-80 text-lg'>Kullu Manali Shimla Has Always Been A Very Popular Destination For The Old, Young Travelers As Well As Newly Married Couples Who Look For Cheapest Manali Tour Packages & Manali Honeymoon Packages To Experience The Perfect Solitude And Calmness At Its Best.</p>
                        <div className='flex justify-around mt-8'> 
                        <button className='bg-orange-400 rounded-full w-40  text-white font-bold '>Enquire Now</button>
                        <p className='text-center text-orange-400 text-2xl font-bold rounded-full bg-white w-40'>₹9500</p>
                        </div>
                    </div>
                    {/* Image on the right */}
                    <div className="w-1/2 ml-10">
                        <img src="photos/image2.jpeg" alt="im" className="object-cover h-full w-full" />
                    </div>
                </div>
            </div>
            <div className="w-3/4 mx-4 mt-7 mb-5 bg-gray-800 shadow-md shadow-blue-300 ">
                {/* Third Card */}
                <div className=" shadow-md  rounded-md overflow-hidden flex ">
                    {/* Image on the left */}
                    <div className="w-1/2">
                        <img src="photos/image3.jpeg" alt="im" className="object-cover h-full w-full" />
                    </div>
                    {/* Content on the right */}
                    <div className="w-1/2 p-5 ml-10 text-white my-auto">
                        <h2 className="text-3xl text-center text-white font-extrabold mb-2">Rajasthan</h2>
                        <p className='mt-5 mx-auto w-80 text-lg'> We Organise Jaipur & Rajasthan Tours That Offer Incredible Attractions Like Forts And Palaces, Deserts, Traditional Villages, Colorful Cattle Fairs, Sacred Places, Camel Safaris, Beautiful Lakes, Hill Stations And The People.</p>
                        <div className='flex justify-around mt-8'> 
                        <button className='bg-orange-400 rounded-full w-40  text-white font-bold '>Enquire Now</button>
                        <p className='text-center text-orange-400 text-2xl font-bold rounded-full bg-white w-40'>₹9500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;

