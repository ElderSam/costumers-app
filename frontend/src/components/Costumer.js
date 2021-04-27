import React from 'react';
import { Card, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom';

import { formatToBrazilianDate, formatCPF, getMaritalStatusText } from './utils/index';

import styles from './costumer.module.scss';
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
    const history = useHistory();

    return (
        <Card className={styles.costumer}>
            <Card.Body>
                <Card.Title className={styles.costumerTitle}>{name}</Card.Title>
                <div className={styles.costumerDetails}>
                    <div>Nome: {name}</div>
                    <div>Nascimento: {formatToBrazilianDate(birth_date)}</div>
                    <div>Estado Civil: {getMaritalStatusText(marital_status)}</div>
                    <div>CPF: {formatCPF(CPF)}</div>
                    <div>Cidade: {city}/{country_state}</div>
                </div>
                <Button variant="primary" title="editar" onClick={() => history.push(`/edit/${id}`)}>
                    <img src={EditIcon} className={styles.icon} alt="edit icon" />
                </Button>{' '}
                <Button variant="danger" title="excluir" onClick={() => handleRemoveCostumer(id)}>
                    <img src={DeleteIcon} className={styles.icon} alt="delete icon" />
                </Button>
            </Card.Body>
        </Card>
    )
};

export default Costumer;