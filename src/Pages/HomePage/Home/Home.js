import React from 'react';
import Header from '../Header/Header';
import Discover from '../Discover/Discover';
import Arrival from '../Arrival/Arrival';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Discover></Discover>
            <Arrival></Arrival>
        </div>
    );
};

export default Home;