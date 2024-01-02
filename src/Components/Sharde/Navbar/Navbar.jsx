import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navlinks = <>
       <Link to='/'><li><button>Home</button></li></Link>
       <Link to='/Accounts'><li><button>Accounts</button></li></Link>
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <h1 className="text-2xl lg:ml-24 font-bold text-teal-500">Buy VCC Store</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-indigo-600 hover:bg-indigo-800 text-white">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;