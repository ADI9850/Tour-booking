// AdventureIdea.js
import React from 'react';
import { Link } from 'react-router-dom';
import Popular from './Popular';
import Benifits from './Benifits';
import Carousel from './Carousal';
import Upcoming from './Upcoming';



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
        <Carousel/>
        <Upcoming/>

         <section className="category mt-10 shadow-md bg-slate-100" id="category">
            <h1 className="heading text-center font-bold text-4xl text-blue-600 mb-6">Our Tours!</h1>
            <p className='text-center mx-auto mb-10 text-gray-800  w-3/4  '>Travelling abroad for a holiday is a great thing but there isn’t anything that beats the diversity of landscapes and cultures in India. We inspire local travellers to travel more in India, as our India holiday packages acquaint travellers with the incredible beauty of the country. Take a look at top selling holiday packages in India.</p>
            <div className='flex justify-center'>
            <div className="box-container grid grid-cols-1 md:grid-cols-3 gap-8 ">
            
                {ideas.map((idea, index) => (
                    <div key={index} className="box p-3 w-72 text-center bg-white rounded-lg shadow-lg shadow-black m-auto mb-3 hover:bg-black hover:text-white">
                        <img src={idea.image} alt={idea.title} className="w-full mb-4 rounded-md border-2 border-blue-400" />
                        <h3 className="text-2xl text-green-600 font-extrabold mb-2">{idea.title}</h3>
                        <p className="">{idea.description}</p>
                       <div>
                        {/* Conditionally render Link with different paths */}
                        {index === 0 && <Link to="/holiday"><button className='bg-orange-400  rounded-full w-24 text-white  font-bold mt-3'>Explore</button></Link>}
                        {index === 1 && <Link to="/jungle"><button className='bg-orange-400  rounded-full w-24 text-white  font-bold mt-3'>Explore</button></Link>}
                        
                        {index === 2 && <Link to="/spirutal"><button className='bg-orange-400  rounded-full w-24 text-white  font-bold mt-3'>Explore</button></Link>}
                    </div>
                    </div>
                ))}
            </div>
            </div>
        </section>

        <Benifits/>
        <Popular/>
        
        </>
    );
};

export default AdventureIdea;
