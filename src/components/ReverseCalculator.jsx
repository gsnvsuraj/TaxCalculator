import React, {useState} from 'react';
import proposedTaxInfo from '../data/ProposedTaxRegime.json';
import newTaxInfo from '../data/NewTaxRegime.json';
import oldTaxInfo from '../data/OldTaxRegime.json';
import ReverseRegime from './ReverseRegime.jsx';

const Calculator = () => {

    const [taxInfoData, setTaxInfoData] = useState(newTaxInfo);

    return (
        <div>

            <h1>Reverse Tax Calculator</h1>

            <button type='button' onClick={() => setTaxInfoData(proposedTaxInfo)}>{proposedTaxInfo.name}</button>
            <button type='button' onClick={() => setTaxInfoData(newTaxInfo)}>{newTaxInfo.name}</button>
            <button type='button' onClick={() => setTaxInfoData(oldTaxInfo)}>{oldTaxInfo.name}</button>

            <ReverseRegime taxInfo={taxInfoData}/>

        </div>
    );
};

export default Calculator;