import React from 'react';


function SlabInfoTable(props) {

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

    return (
        <div>
			<h2>Tax Slab Information</h2>

			<table className="taxTable">

				<tbody>
					<tr>
						<th>Income Tax Slab</th>
						<th>Tax Rate</th>
						<th>Your Tax</th>
					</tr>
					{props.taxRates.map(( rates, index ) => {
						return (
							<tr key={index}>
								<td>&#8377; {convertToLocaleString(rates.start)} {' - '} {rates.end != -1 ? convertToLocaleString(rates.end) : 'Above'}</td>
								<td>{rates.rate + '%'}</td>
								<td>&#8377; {convertToLocaleString(calculateTaxForSlab(props.amount, rates))}</td>
							</tr>
						);
					})}
					{
						<tr>
							<th colSpan="2">Total</th>
							<th>&#8377; {convertToLocaleString(props.tax)}</th>
						</tr>
					}
				</tbody>
			</table>

        </div>
    );
    
}

export default SlabInfoTable;
