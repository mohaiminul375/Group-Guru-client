import React from 'react';
import Bannner from './Bannner';
import Featured from './Featured';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Bannner/>
            <Featured/>
            <FAQ/>
        </div>
    );
};

export default Home;