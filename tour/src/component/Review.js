import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    title: "Kerala",
    text: "Amazing experience! The tour was well-organized and the sights were breathtaking.",
    author: "John Doe",
    date: "Travelled in July 2023",
  },
  {
    id: 2,
    title: "Tadoba",
    text: "Fantastic tour! The guides were knowledgeable, and the itinerary was well-planned.",
    author: "Alice Smith",
    date: "Travelled in August 2023",
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 shadow-lg">
      <h1 className="text-center font-bold text-orange-500 text-4xl  mb-10">
        ___Tour Reviews___
      </h1>
      <div
        className="flex mb-6 bg-cover bg-center lg:h-72 sm:h"
        style={{ backgroundImage: "url('/photos/image13.jpg') " }}
      >
        <div className="w-3/4 m-auto">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 text-blue-500">
                  <p className="text-lg">{review.title}</p>
                  <div className="font-bold text-black text-xl space-x-2 mb-2">
                    {review.text}
                  </div>
                  <p className="text-base">{review.author}</p>
                  <p className="text-base">{review.date}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
