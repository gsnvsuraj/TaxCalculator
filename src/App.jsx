import NewRegime from './NewRegime';

function App() {

  	return (
    	<div className="App">

			<header className="header">
				<h1>Tax Calculator</h1>
			</header>

			<NewRegime />

			<footer className='footer'>
				<p><b>* Note :</b> The exact tax amout can vary, so use this as a reference only.</p>
			</footer>

    	</div>
  	);

}

export default App
