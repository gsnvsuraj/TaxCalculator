import React from 'react';
import comparisonData from '../data/RegimeComparison.json';
import '../styles/RegimeComparison.css';

const RegimeComparison = () => {

    return (
        <div className="comparison-container">
            <h1 className="title">Old vs New Tax Regime</h1>
            <table className="comparison-table">
                <thead>
                <tr>
                    <th>Aspect</th>
                    <th>Old Regime</th>
                    <th>New Regime</th>
                </tr>
                </thead>
                <tbody>
                {comparisonData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.aspect}</td>
                        <td>{item.oldRegime}</td>
                        <td>{item.newRegime}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RegimeComparison;