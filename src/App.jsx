import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from "./components/Footer.jsx";
import Regime from './components/Regime.jsx';
import newTaxInfo from './data/NewTaxRegime.json';
import oldTaxInfo from './data/OldTaxRegime.json';

function App() {

	const [taxInfoData, setTaxInfoData] = useState(newTaxInfo);

  	return (
    	<div className="App">

			<Navbar />

			<button type='button' onClick={() => setTaxInfoData(newTaxInfo)}>{newTaxInfo.name}</button>
			<button type='button' onClick={() => setTaxInfoData(oldTaxInfo)}>{oldTaxInfo.name}</button>

			<Regime taxInfo={taxInfoData} />

			<Footer />

    	</div>
  	);

}

export default App;
