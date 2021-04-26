import React from 'react';
import { Card, Button } from "react-bootstrap"

import { formatToBrazilianDate, formatCPF, getMaritalStatusText } from './utils/index';
import EditIcon from './icons/pencilSquare.svg';
import DeleteIcon from './icons/trash.svg';

const Costumer = ({
    id,
    name,
    birth_date,
    marital_status,
    CPF,
    city,
    country_state,
    handleRemoveCostumer
}) => {

    return (
        <Card style={{ width: '18rem' }} className="costumer">
            <Card.Body>
                <Card.Title className="costumer-title">{name}</Card.Title>
                <div className="costumer-details">
                    <div>Nome: {name}</div>
                    <div>Nascimento: {formatToBrazilianDate(birth_date)}</div>
                    <div>Estado Civil: {getMaritalStatusText(marital_status)}</div>
                    <div>CPF: {formatCPF(CPF)}</div>
                    <div>Cidade: {city}/{country_state}</div>
                </div>
                <Button variant="primary" title="editar">
                    <img src={EditIcon} className="icon" alt="edit icon" />
                </Button>{' '}
                <Button variant="danger" title="excluir" onClick={() => handleRemoveCostumer(id)}>
                    
                    <img src={DeleteIcon} className="icon" alt="delete icon" />
                </Button>
            </Card.Body>
        </Card>
    )
};

export default Costumer;