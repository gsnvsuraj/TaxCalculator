import React, { useState } from 'react';
import SlabInfoTable from './SlabInfoTable.jsx';
import { currency, convertToLocalFormat, calculateTax, calculateCess, calculateTaxPercentage } from './logic.jsx';


function Regime({taxInfo}) {

    const [inputAmt, setInputAmt] = useState('');
    const [amount, setAmount] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [taxPercent, setTaxPercent] = useState(0.0);

    const checkAmountString = (str) => {

        const re = /^[0-9,]*$/;
        return re.test(str);
    
    }

    const handleInputChange = (event) => {

        if ( checkAmountString(event.target.value) ) {
            const temp = event.target.value.replaceAll(',', '')
            setInputAmt( convertToLocalFormat(Number(temp)) );
        }

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const inputAmount = event.target.amountInput.value.replaceAll(',', '');
        setAmount(inputAmount);

        const calculatedTax = calculateTax(taxInfo, inputAmount);
        const cess = calculateCess(taxInfo.cess, calculatedTax);
        const percentage = calculateTaxPercentage(calculatedTax + cess, inputAmount);

        setTax(calculatedTax);
        setTotalTax(calculatedTax + cess);
        setTaxPercent(percentage);
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
				<h3>Estimated Tax : {currency} {convertToLocalFormat(totalTax)}</h3>
                <h3>Remaining Amount : {currency} {convertToLocalFormat(amount - totalTax)}</h3>
                <h4>Estimated Total Tax percentage : {taxPercent}%</h4>
			</div>

			<div className="regimeOutput">
				<SlabInfoTable amount={amount} taxRates={taxInfo.taxRates} tax={tax} exemption={taxInfo.exemption}
                               deduction={taxInfo.deduction} cess={taxInfo.cess} totalTax={totalTax} />
			</div>

        </div>
    );
    
}

export default Regime;
