import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    tital:'Kerala',
    text: "Amazing experience! The tour was well-organized and the sights were breathtaking.",
    author: "John Doe",
    date: "Travelled in July 2023"
  },
  {
    id: 2,
    tital:'Tadoba',
    text: "Fantastic tour! The guides were knowledgeable, and the itinerary was well-planned.",
    author: "Alice Smith",
    date: "Travelled in August 2023"
  },
  {
    id: 3,
    tital:'Himachal',
    text: " tour! The guides were knowledgeable, and the itinerary was well-planned.",
    author: "Alice Smith",
    date: "Travelled in August 2023"
  },
  {
    id: 4,
    tital:'Adiyogi',
    text: "Intresting tour! The guides were knowledgeable, and the itinerary was well-planned.",
    author: "Alice Smith",
    date: "Travelled in August 2023"
  },
  {
    id: 5,
    tital:'Ayodhya',
    text: "Very Beutiful tour! The guides were knowledgeable, and the itinerary was well-planned.",
    author: "Alice Smith",
    date: "Travelled in August 2023"
  },
  {
    id: 6,
    tital:'Rajasthan',
    text: " The guides were knowledgeable, and the itinerary was well-planned.",
    author: "Alice Smith",
    date: "Travelled in August 2023"
  },
  // Add more reviews here if needed
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
     <h1 className='text-center font-bold text-4xl  mb-10'>Tour Reviews</h1>
    <div   className=' flex  mb-6 bg-cover bg-center h-72 ' style={{ backgroundImage: "url('/photos/image13.jpg') " }}>

    <div className='w-3/4 m-auto '>
    <Slider {...settings}>
      {reviews.map((review) => (
        <div key={review.id} className="max-w-lg mx-auto space-x-2 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 text-blue-500">
          <p className=" text-lg">{review.tital}</p>
            <div className="font-bold text-black text-xl space-x-2 mb-2">{review.text}</div>
            <p className=" text-base">{review.author}</p>
            <p className=" text-base">{review.date}</p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    </div>
    </>
  );
};

export default Review;





