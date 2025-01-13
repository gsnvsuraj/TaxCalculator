import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home.jsx';
import Calculator from './Calculator.jsx';
import FAQPage from './FAQPage.jsx';
import '../styles/PageRoutes.css';

const BASE_PATH = '/TaxEngine';

const PageRoutes = () => {
    return (
        <Router basename={BASE_PATH}>
            <div className="content">

                <Link to="/" className="home-coming">
                    🏠
                </Link>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calculate" element={<Calculator />}/>
                    <Route path="/faq" element={<FAQPage />}/>
                </Routes>

            </div>
        </Router>
    );
};

export default PageRoutes;