import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

const Spirutal = () => {
    const ideas = [
        {
            title: 'Kedarnath',
            description: 'Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.',
            image: '/photos/kedarnath.jpg',
            price: '16999'
        },
        {
            title: 'Sun Temple',
            description: 'A zip-line, zip line, zip-wire, or flying fox is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope.',
            image: '/photos/temple2.jpg',
            price: '10999'
        },
        {
            title: 'Ram Mandir',
            description: 'Canoeing is an activity which involves paddling a canoe with a single-bladed paddle.',
            image: '/photos/temple.jpg',
            price: '9999'
        }
    ];

    return (
        <div className="flex flex-col items-center mb-5 mt-10">
            <h1 className='mb-8 text-4xl font-bold text-orange-500'>Spirutal Tour</h1>
            {ideas.map((idea, index) => (
                <div key={index} className='w-full lg:w-1/2 sm:w-1/4  mb-8'>
                    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden flex sm:flex-col lg:flex-row text-white">
                        {/* Image on the left */}
                        <div className="w-1/2 sm:w-1/2">
                            <img src={idea.image} alt={idea.title} className="w-full h-full object-cover" />
                        </div>
                        {/* Content on the right */}
                        <div className="w-1/2 sm:w-1/2 p-5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl text-white font-extrabold mb-2">{idea.title}</h2>
                                <p>{idea.description}</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <p className='lg:w-24 sm:w-auto h-10 rounded-full  text-xl p-2 font-bold bg-white text-orange-400'>{`₹${idea.price}`}</p>
                                <Link to='/booking'><button className='lg:w-30 sm:w-auto h-10 p-2  text-lg text-white font-bold bg-orange-400 rounded-full'>Book now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Services />
        </div>
    );
};

export default Spirutal;
