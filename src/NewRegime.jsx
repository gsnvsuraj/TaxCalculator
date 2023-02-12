import React, { useState } from 'react';
import SlabInfoTable from './components/SlabInfoTable';
import taxInfo from './data/NewTaxRegime.json';


function NewRegime() {

    const [amount, setAmount] = useState(0);
    const [tax, setTax] = useState(0);

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        calculateTax(amount);
    };

	const convertToLocaleString = (parameter) => {
		return parameter.toLocaleString('hi');
	};

	const calculateTaxForSlab = (amount, slab) => {

		var taxSlab = 0;
		
		if (amount <= 700000)
            taxSlab = 0;

        else {
                
			if (amount > slab.start) {
				
				let endLimit = slab.end;
				if (slab.end == -1)
					endLimit = Infinity;

				let limit = Math.min(endLimit, amount);
				taxSlab = (limit - slab.start) * slab.rate / 100;
			}

        }

		return Math.ceil(taxSlab);
    
	};

    const calculateTax = (amount) => {

        if (amount <= 700000)
            setTax(0);

        else {

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
    
        }

    };

    return (
        <div className="container">
			<div className="regimeInput">
				<h2>{taxInfo.name}</h2>
				<form onSubmit={handleFormSubmit}>
					Total Income : <input type="text" value={convertToLocaleString(amount)} onChange={handleChange} min={0} className="taxInput" />
					<br />
					<button type="submit">Submit</button>
				</form>
				<h2>Tax : &#8377; {convertToLocaleString(tax)}</h2>
			</div>

			<div className="regimeOutput">
				<SlabInfoTable amount={amount} taxRates={taxInfo.taxRates} tax={tax} />
			</div>

        </div>
    );
    
}

export default NewRegime;
