import React from 'react';
import Header from '../Header/Header';
import Discover from '../Discover/Discover';
import Arrival from '../Arrival/Arrival';
import Steps from '../Steps/Steps';
import Earn from '../Earn/Earn';
import Special from '../Special/Special';
import BestSeller from '../BestSeller/BestSeller';
import ShopByDep from '../ShopByDep/ShopByDep';
import Offer from '../Offer/Offer';
import CartModal from '../../CartModal/CartModal';

const Home = () => {
    return (
        <div>
            <CartModal></CartModal>
            <Header></Header>
            <Discover></Discover>
            <Arrival></Arrival>
            <div className="divider mx-10"></div>
            <Steps></Steps>
            <Earn></Earn>
            <BestSeller></BestSeller>
            <Special></Special>
            <ShopByDep></ShopByDep>
            <Offer></Offer>

        </div>
    );
};

export default Home;