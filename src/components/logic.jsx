const rupeeSymbol = "₹";
const indianStringFormat = "en-IN";

export const currency = rupeeSymbol;

export const convertToLocalFormat = (parameter) => {
    return parameter.toLocaleString(indianStringFormat);
};

export const calculateTax = (taxInfo, amount) => {

    amount -= taxInfo.deduction;
    let calTax = 0;

    if (amount > taxInfo.exemption)
        for (let slab of taxInfo.taxRates)
            calTax += calculateTaxForSlab(amount, slab, taxInfo.exemption)

    return Math.ceil(calTax);

};


export const calculateTaxForSlab = (amount, slab, exemption) => {

    let taxSlab = 0;

    if (amount > exemption && amount > slab.start) {

        let endLimit = slab.end;
        if (slab.end === -1)
            endLimit = Infinity;

        let limit = Math.min(endLimit, amount);
        taxSlab = (limit - slab.start) * slab.rate / 100;

    }

    return Math.ceil(taxSlab);

};

export const calculateCess = (cess, tax) => {
    return Math.ceil(tax * cess / 100);
};

export const calculateTaxPercentage = (tax, amount) => {
    return Number((tax*100 / amount).toFixed(1));
};