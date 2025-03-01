import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home.jsx';
import RegimeComparison from './RegimeComparison.jsx';
import Calculator from './Calculator.jsx';
import FAQPage from './FAQPage.jsx';
import '../styles/PageRoutes.css';
import {ROUTES, BASE_PATH} from './Constants.jsx';
import ReverseCalculator from './ReverseCalculator.jsx';

const PageRoutes = () => {
    return (
        <Router basename={BASE_PATH}>
            <div className="content">

                <Link to={ROUTES.HOME} className="home-coming">
                    🏠
                </Link>

                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.COMPARISON} element={<RegimeComparison />}/>
                    <Route path={ROUTES.CALCULATOR} element={<Calculator />}/>
                    <Route path={ROUTES.REVERSE_CALCULATOR} element={<ReverseCalculator />}/>
                    <Route path={ROUTES.FAQ} element={<FAQPage />}/>
                </Routes>

            </div>
        </Router>
    );
};

export default PageRoutes;