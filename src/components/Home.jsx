import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import {ROUTES} from './Constants.jsx';

const Home = () => {

    return (
        <div className="home">

            <Link to={ROUTES.COMPARISON}>
                <button type='button' className="navigation-button">Regime Comparison</button>
            </Link>

            <br />

            <Link to={ROUTES.CALCULATOR}>
                <button type='button' className="navigation-button">Calculator</button>
            </Link>

            <br />

            <Link to={ROUTES.REVERSE_CALCULATOR}>
                <button type='button' className="navigation-button">Reverse Calculator</button>
            </Link>

            <br />

            <Link to={ROUTES.FAQ}>
                <button type='button' className="navigation-button">FAQ</button>
            </Link>

        </div>
    );
};

export default Home;