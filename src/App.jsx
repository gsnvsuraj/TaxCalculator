import { useState } from 'react';
import Regime from './components/Regime.jsx';
import newTaxInfo from './data/NewTaxRegime.json';
import oldTaxInfo from './data/OldTaxRegime.json';

function App() {

	const [taxInfoData, setTaxInfoData] = useState(newTaxInfo);

  	return (
    	<div className="App">

			<header className="header">
				<h1>Tax Engine</h1>
			</header>

			<button type='button' onClick={() => setTaxInfoData(newTaxInfo)}>{newTaxInfo.name}</button>
			<button type='button' onClick={() => setTaxInfoData(oldTaxInfo)}>{oldTaxInfo.name}</button>

			<Regime taxInfo={taxInfoData} />

			<footer className='footer'>
				<p><b>* Note :</b> The exact tax amout can vary, so use this as a reference only.</p>
			</footer>

    	</div>
  	);

}

export default App;
