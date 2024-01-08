import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Account from './Account';

const Accounts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services/accounts')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div className='my-16'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-slate-600'>Our Vartual Bank Accounts</h1>
                <div className='h-2 max-w-md mx-auto bg-cyan-200 rounded'></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
                 {
                    products.map(product => <Account key={product._id} product={product}></Account>)
                 }
            </div>

            <div className='flex justify-center mx-auto mt-10'>
                <button className="btn bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-xl">See More</button>
            </div>

        </div>
    );
};

export default Accounts;