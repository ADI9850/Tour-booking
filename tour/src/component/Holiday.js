// AdventureIdea.js
import React from 'react';
import { Link } from 'react-router-dom';


const Holiday = () => {
    const ideas = [
        {
            title: 'Himachal',
            description: 'Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.',
            image: '/photos/image5.jpeg',
           price:'10999'
        },
        {
            title: 'Kashmir',
            description: 'A zip-line, zip line, zip-wire, or flying fox is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope.',
            image: '/photos/image11.jpg',
            price:'9999'
        },
        {
            title: 'Rajasthan',
            description: 'Canoeing is an activity which involves paddling a canoe with a single-bladed paddle.',
            image: '/photos/image3.jpeg',
            price:'8999'  
        }
    ];

    return (
        <>
       

        <div className=" flex flex-col items-center mb-5 mt-10">
        <h1 className='mb-8 text-4xl font-bold text-blue-500'>Popular packages</h1>
        {ideas.map((idea,index)=> (
            <div key={index} className='flex justify-center'>
            <div className="w-1/2  mt-5">
                {/* First Card */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex ">
                    {/* Image on the left */}
                    <div className="w-1/2  ">
                        <img src={idea.image} alt='im' />
                    </div>
                    {/* Content on the right */}
                    <div className="w-1/2 p-5 ml-10 text-center">
                        <h2 className="text-2xl text-violet-500 font-bold mb-2">{idea.title}</h2>
                        <p>{idea.description}</p>
                        <p className='text-2xl font-serif text-red-500 mt-5'>₹{idea.price}</p> 
                       
                       <Link to='/booking'> <button className='text-lg text-white font-bold bg-green-600 rounded-full w-20 mt-10'>Book now</button></Link>
                    </div>
                  
                </div>
                
            </div>
            </div>
        ))}
            </div>
            </>
    );
};

export default Holiday;