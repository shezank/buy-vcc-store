import React from 'react';

const Account = ({ product }) => {
    const { name, price, image, sortDescription, serviceDetails, catagory } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <p className='absolute bg-cyan-700 rounded-br-lg rounded-tl-lg text-white p-2 text-xl font-extrabold '>${price}</p>
            <figure><img className='h-[250px] w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-cyan-700">{name}</h2>
            </div>
            <button className="btn rounded-t-none bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-xl">Buy Now</button>
        </div>
    );
};

export default Account;