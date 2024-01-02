import React from 'react';
import paypalaccounts from '../../../../assets/Payments/paypalaccounts.jpg'

const Accounts = () => {
    return (
        <div className='my-16'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-slate-600'>Our Vartual Bank Accounts</h1>
                <div className='h-2 max-w-md mx-auto bg-orange-200'></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
                <div className="card bg-base-100 shadow-xl">
                    <p className='absolute bg-cyan-700 text-white p-2 text-xl font-extrabold '>$100</p>
                    <figure><img className='h-[250px] w-full' src={paypalaccounts} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-cyan-700">Buy Paypal Accounts</h2>
                    </div>
                    <button className="btn rounded-t-none bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-xl">Buy Now</button>
                </div>
            </div>

            <div className='flex justify-center mx-auto mt-10'>
                <button className="btn bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-xl">See More</button>
            </div>

        </div>
    );
};

export default Accounts;