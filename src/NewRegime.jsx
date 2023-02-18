import React, { useState } from 'react';
import SlabInfoTable from './components/SlabInfoTable';
import taxInfo from './data/NewTaxRegime.json';


function NewRegime() {

    const [inputAmt, setInputAmt] = useState('');
    const [amount, setAmount] = useState(0);
    const [tax, setTax] = useState(0);
    const [taxPercent, setTaxPercent] = useState(0.0);

    const handleInputChange = (event) => {
        const temp = event.target.value.replaceAll(',', '')
        setInputAmt( convertToLocaleString(Number(temp)) );
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const inputAmount = event.target.amountInput.value.replaceAll(',', '');
        setAmount(inputAmount);
        calculateTax(inputAmount);
    };

	const convertToLocaleString = (parameter) => {
		return parameter.toLocaleString('hi');
	};

    const calculateTax = (amount) => {

        if (amount <= 700000) {
            setTax(0);
            setTaxPercent(0);
        } else {

            let calTax = 0;
            for (let slab of taxInfo.taxRates) {
                
                if (amount > slab.start) {
                    
                    let endLimit = slab.end;
                    if (slab.end == -1)
                        endLimit = Infinity;

                    let limit = Math.min(endLimit, amount);
                    calTax += (limit - slab.start) * slab.rate / 100;
                }

            }

            setTax(Math.ceil(calTax));
            setTaxPercent((calTax*100 / amount).toFixed(1));
    
        }

    };

    return (
        <div className="container">
			<div className="regimeInput">
				<h2>{taxInfo.name}</h2>
				<form onSubmit={handleFormSubmit}>
					Total Income : <input type="text" name="amountInput" min={0} value={inputAmt} placeholder={0} onChange={handleInputChange} className="taxInput" />
					<br />
					<button type="submit">Submit</button>
				</form>
				<h3>Tax : &#8377; {convertToLocaleString(tax)}</h3>
                <h3>Remaining Amount : &#8377; {convertToLocaleString(amount - tax)}</h3>
                <h4>Total Tax percentage : {parseFloat(taxPercent).toFixed(1)}%</h4>
			</div>

			<div className="regimeOutput">
				<SlabInfoTable amount={amount} taxRates={taxInfo.taxRates} tax={tax} />
			</div>

        </div>
    );
    
}

export default NewRegime;
