import { marital_status_OPTIONS } from '../form/OptionValues';

const formatToBrazilianDate = (myDate) => { // format 'yyyy-mm-dd' to 'dd/mm/yyyy'
    const year = myDate.substr(0, 4)
    const month = myDate.substr(5, 2)
    const day = myDate.substr(8, 2)

    return `${day}/${month}/${year}`;
}

const formatCPF = (CPF) => { // format '12345678901' (length 11) to '123.456.789-01'
    const x1 = CPF.substr(0, 3) + '.';
    const x2 = CPF.substr(3, 3) + '.';
    const x3 = CPF.substr(6, 3) + '-';
    const x4 = CPF.substr(9, 2);

    return x1 + x2 + x3 + x4;
}

const getMaritalStatusText = (status) => {
    const auxStatus = marital_status_OPTIONS.find(({ value }) => value === parseInt(status));
    return auxStatus.text;
}

export {
    formatToBrazilianDate,
    formatCPF,
    getMaritalStatusText
}