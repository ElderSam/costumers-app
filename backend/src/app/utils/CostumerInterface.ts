import { maritalStatusType } from './types';

export default interface CostumerInterface {
    name: string,
    birth_date: string,
    marital_status: maritalStatusType,
    CPF: string,
    city: string,
    country_state: string
}