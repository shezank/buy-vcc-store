import React from 'react';
import Bannar from '../Bannar/Bannar';
import SortFeture from '../Bannar/SortFeture';
import Steps from '../Steps/Steps';
import Accounts from '../Accounts/Accounts';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <SortFeture/>
            <Accounts/>
        </div>
    );
};

export default Home;