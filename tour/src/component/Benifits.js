import React from 'react';

const services = [
  {
    title: 'Accomodation',
    image: '/photos/Accomodation.png',
    description: 'Comfortable & convenient hotels cherry picked by our hotel management team',
  },
  {
    title: 'All Meals',
    image: '/photos/meal.png',
    description: 'Eat to your heart\'s content Breakfast. Lunch. Dinner.',
  },
  {
    title: 'Transport',
    image: '/photos/transport.png',
    description: 'Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free',
  },
];

const Benifits = () => {
  return (
    <div className='flex flex-col items-center mt-14 bg-gray- py-4 shadow-lg '>
      <h1 className='text-center font-bold text-4xl text-blue-500 mb-10'>Services</h1>
      <div className='flex w-3/4 justify-around'>
        {services.map((service, index) => (
          <div key={index} className='shadow-lg shadow-black text- px-2 border-2 bg-gray- hover:ease-out'>
            
            <img src={service.image} alt={service.title} className='w-20 mx-auto hover:bg-white '/>
            <p className='text-center text-lg font-bold mt-5'>{service.title}</p>
            <p className='w-60 text-center mt-5'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;

