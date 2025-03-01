import React, { useState } from 'react';
import SlabInfoTable from './SlabInfoTable.jsx';
import { currency, convertToLocalFormat, checkAmountString, reverseCalculateAmount, calculateTax, calculateCess, calculateTaxPercentage } from './logic.jsx';


function Regime({taxInfo}) {

    const [inputAmt, setInputAmt] = useState('');
    const [amount, setAmount] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [taxPercent, setTaxPercent] = useState(0.0);

    const handleInputChange = (event) => {

        if ( checkAmountString(event.target.value) ) {
            const temp = event.target.value.replaceAll(',', '')
            setInputAmt( convertToLocalFormat(Number(temp)) );
        }

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const inputAmount = event.target.amountInput.value.replaceAll(',', '');

        const earnAmount = reverseCalculateAmount(taxInfo, inputAmount);
        const calculatedTax = calculateTax(taxInfo, earnAmount);
        const cess = calculateCess(taxInfo.cess, calculatedTax);
        const percentage = calculateTaxPercentage(calculatedTax + cess, earnAmount);

        setAmount(earnAmount);
        setTax(calculatedTax);
        setTotalTax(calculatedTax + cess);
        setTaxPercent(percentage);
    };


    return (
        <div className="container">
			<div className="regimeInput">
				<h2>{taxInfo.name}</h2>
				<form onSubmit={handleFormSubmit}>
					Desired Amount : <input type="text" name="amountInput" min={0} value={inputAmt} placeholder={0} onChange={handleInputChange} className="taxInput" />
					<br />
					<button type="submit">Submit</button>
				</form>
                <h3>Estimated Amount : {currency} {convertToLocalFormat(amount)}</h3>
				<h3>Estimated Tax : {currency} {convertToLocalFormat(totalTax)}</h3>
                <h4>Estimated Total Tax percentage : {taxPercent}%</h4>
			</div>

			<div className="regimeOutput">
				<SlabInfoTable amount={amount - taxInfo.deduction} taxRates={taxInfo.taxRates} tax={tax} exemption={taxInfo.exemption}
                               deduction={taxInfo.deduction} cess={taxInfo.cess} totalTax={totalTax} />
			</div>

        </div>
    );
    
}

export default Regime;
