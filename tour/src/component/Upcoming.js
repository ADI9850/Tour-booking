import React from 'react';

const Upcoming = () => {
  const tours = [
    { src: '/photos/image8.jpg ', text: 'Summer Special' },
    { src: '/photos/image19.jpg', text: 'Holiday Special' },
    { src: '/photos/image18.jpg', text: 'Honeymoon Special' },
    { src: '/photos/image15.jpg', text: 'Regional Special' }
  ];

  return (
    <>
      <div className='flex flex-col mt-5'>
        <p className='text-4xl text-blue-600 font-bold text-center'>Upcoming Tours</p>
        <div className='flex items-center mx-auto w-2/3 mt-8 shadow-lg shadow-black bg-gray-00  mb-5'>
          <div className='text-center mb-6 w-1/2 tracking-wider '>
            <span className='text-orange-400 font-extrabold text-2xl'>SUMMER VACATION WITH YOUR FAMILY.</span>
            <p className='text-lg  mt-8 '>Don't let of your chance of a</p>
            <p className='mt-2 text-lg'>Explore iconic cities, rich history and incredible landscapes across European cities. Limited-time offers packed with adventure and savings.</p>
            <button className='bg-orange-400 rounded-full w-40 h-10 font-bold mt-3'>Explore</button>
          </div>
          {/* Image Section*/}
          <div className="flex flex-wrap justify-center w-1/2">
            {tours.map((tour, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden w-60 h-56 m-1">
                <img src={tour.src} alt="Upcoming" className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center ">{tour.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;


