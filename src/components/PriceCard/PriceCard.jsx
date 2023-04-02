import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center' >
            <span className='text-purple-700 text-5xl font-extrabold'>{price.prices}</span>
            <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <p className='font-bold text-yellow-50 underline'>Features :</p>
            {
                price.features.map((feature,index) =><Feature 
                    key={index}
                    feature={feature}
                />)
            }
            <button className='w-full bg-green-500 py-2 mt-auto hover:bg-green-700 rounded-md text-yellow-50 font-bold' >Buy Now</button>
        </div>
    );
};

export default PriceCard;