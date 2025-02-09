import React from 'react';
import { convertToLocalFormat, calculateCess, currency, calculateTaxForSlab } from './logic.jsx';


function SlabInfoTable(props) {

    return (
		<div>
			<h2>Tax Slab Information</h2>

			<div>Standard Deduction: {currency} {convertToLocalFormat(props.deduction)}</div>

			<table className="taxTable">

				<thead>
					<tr>
						<th>Income Tax Slab</th>
						<th>Tax Rate</th>
						<th>Your Tax</th>
					</tr>
				</thead>
				{
					<tbody>

						{props.taxRates.map((rates, index) => {
							return (
								<tr key={index}>
									<td>{currency} {convertToLocalFormat(rates.start)} {' - '} {rates.end !== -1 ? convertToLocalFormat(rates.end) : 'Above'}</td>
									<td>{rates.rate + '%'}</td>
									<td>{currency} {convertToLocalFormat(calculateTaxForSlab(props.amount, rates, props.exemption))}</td>
								</tr>
							);
						})}

						<tr>
							<td colSpan="2">Total</td>
							<td>{currency} {convertToLocalFormat(props.tax)}</td>
						</tr>

						<tr>
							<td>Cess</td>
							<td>{props.cess + '%'}</td>
							<td>{currency} {convertToLocalFormat(calculateCess(props.cess, props.tax))}</td>
						</tr>

						<tr>
							<th colSpan="2">Grand Total</th>
							<th>{currency} {convertToLocalFormat(props.totalTax)}</th>
						</tr>

					</tbody>
				}
			</table>
		</div>
	);

}

export default SlabInfoTable;
