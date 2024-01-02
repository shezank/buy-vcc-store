import React from 'react';
import payments from '../../../../assets/Images/paymensban.jpg'
import SortFeture from './SortFeture';

const Bannar = () => {
    return (
        <div>
            <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <p className="inline-block pr-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Hi People
                            </p>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                
                                Welcome To{' '}
                                
                                <span className="inline-block text-teal-500">
                                    Buy Vcc Store
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                I Will Help To You Solving Your Online Payments Getway Problems and Any Online Accounts. If You Need Any Online Solution Just DM.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                            >
                                Explore
                            </a>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700"
                            >
                                Contact US
                            </a>
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img src={payments} alt="Paymenthod" />
                </div>
            </div>
        </div>
    );
};

export default Bannar;