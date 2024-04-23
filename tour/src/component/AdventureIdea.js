// AdventureIdea.js
import React from 'react';
import { Link } from 'react-router-dom';
import Popular from './Popular';
import Benifits from './Benifits';



const AdventureIdea = () => {
    const ideas = [
        {
            title: 'Holiday Special',
            description: 'Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.',
            image: '/photos/image1.jpeg',
            link: 'https://en.wikipedia.org/wiki/Bungee_jumping'
        },
        {
            title: 'Jungle Safari',
            description: 'A zip-line, zip line, zip-wire, or flying fox is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope.',
            image: '/photos/image6.jpg',
            link: 'https://en.wikipedia.org/wiki/Zip_line'
        },
        {
            title: 'Spirutal Tour',
            description: 'Bungee jumping is an activity that involves a person jumping from a great height while connected to a large elastic cord.',
            image: '/photos/image13.jpg',
            link: 'https://en.wikipedia.org/wiki/Canoeing'
        }
    ];

    return (
        <>
         <section className="category mt-5 shadow-md bg-slate-100" id="category">
            <h1 className="heading text-center font-bold text-4xl text-blue-600 mb-6">Our Tours!</h1>
            <div className="box-container grid grid-cols-1 md:grid-cols-3 gap-4">
                {ideas.map((idea, index) => (
                    <div key={index} className="box p-3 w-60 text-center bg-white rounded-lg shadow-md m-auto">
                        <img src={idea.image} alt={idea.title} className="w-full mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
                        <p className="text-gray-600">{idea.description}</p>
                       
                        {/* Conditionally render Link with different paths */}
                        {index === 0 && <Link to="/holiday"><button className='bg-blue-500 rounded-full w-20 text-white font-bold'>Explore</button></Link>}
                        {index === 1 && <Link to="/jungle"><button className='bg-blue-500 rounded-full w-20 text-white font-bold'>Explore</button></Link>}
                        
                        {index === 2 && <Link to="/spirutal"><button className='bg-blue-500 rounded-full w-20 text-white font-bold'>Explore</button></Link>}
                    </div>
                ))}
            </div>
        </section>
        <Benifits/>
        <Popular/>
        
        </>
    );
};

export default AdventureIdea;
