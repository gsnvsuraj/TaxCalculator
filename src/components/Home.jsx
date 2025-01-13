import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {

    return (
        <div className="home">

            <Link to='/calculate'>
                <button type='button' className="navigation-button">Calculator</button>
            </Link>

            <br />

            <Link to='/faq'>
                <button type='button' className="navigation-button">FAQ</button>
            </Link>

        </div>
    );
};

export default Home;