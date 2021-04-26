import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import SelectOptions from './form/SelectOptions';
            
const CostumerForm = (props) => {
  const marital_status_OPTIONS = [
    { value: 1, text: 'Solteiro' },
    { value: 2, text: 'Casado' },
    { value: 3, text: 'Separado judicialmente' },
    { value: 4, text: 'Divorciado' },
    { value: 5, text: 'Viúvo' },
  ];

  const country_state_OPTIONS = [
    { text: 'Acre', value: 'AC' },
    { text: 'Alagoas', value: 'AL' },
    { text: 'Amapá', value: 'AP' },
    { text: 'Amazonas', value: 'AM' },
    { text: 'Bahia', value: 'BA' },
    { text: 'Ceará', value: 'CE' },
    { text: 'Espírito Santo', value: 'ES' },
    { text: 'Goiás', value: 'GO' },
    { text: 'Maranhão', value: 'MA' },
    { text: 'Mato Grosso', value: 'MT' },
    { text: 'Mato Grosso do Sul', value: 'MS' },
    { text: 'Minas Gerais', value: 'MG' },
    { text: 'Pará', value: 'PA' },
    { text: 'Paraíba', value: 'PB' },
    { text: 'Paraná', value: 'PR' },
    { text: 'Pernambuco', value: 'PE' },
    { text: 'Piauí', value: 'PI' },
    { text: 'Rio de Janeiro', value: 'RJ' },
    { text: 'Rio Grande do Norte', value: 'RN' },
    { text: 'Rio Grande do Sul', value: 'RS' },
    { text: 'Rondônia', value: 'RO' },
    { text: 'Roraima', value: 'RR' },
    { text: 'Santa Catarina', value: 'SC' },
    { text: 'São Paulo', value: 'SP' },
    { text: 'Sergipe', value: 'SE' },
    { text: 'Tocantins', value: 'TO' },
    { text: 'Distrito Federal', value: 'DF' },
];

const [costumer, setCostumer] = useState({ // to store all the entered details
    name: props.costumer ? props.costumer.name : '',
    birth_date: props.costumer ? props.costumer.birth_date : '',
    marital_status: props.costumer ? props.costumer.marital_status : '',
    CPF: props.costumer ? props.costumer.CPF : '',
    city: props.costumer ? props.costumer.city : '',
    country_state: props.costumer ? props.costumer.country_state : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, birth_date, marital_status, CPF, city, country_state } = costumer;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, birth_date, marital_status, CPF, city, country_state ];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const costumer = {
        id: uuidv4(),
        name,
        birth_date,
        marital_status,
        CPF,
        city,
        country_state
      };
      props.handleOnSubmit(costumer);
    } else {
      errorMsg = 'Por favor preencha todos os campos'; // 'Please fill out all the fields.'
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if(name === 'CPF' && value.length > 11) return;

    setCostumer((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form">
      <h3>Formulário de Cliente</h3>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>

        <Form.Group controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Nome do cliente"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="marital_status">
          <Form.Label>Estado Civil</Form.Label>
          <Form.Control
            className="input-control"
            as="select"
            name="marital_status"
            value={marital_status}
            placeholder="Enter name of marital_status"
            onChange={handleInputChange}
          >
            <SelectOptions
              options={marital_status_OPTIONS}
            />
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="CPF">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="CPF"
            value={CPF}
            //maxLength="11"
            placeholder="Insira um CPF válido (apenas números)"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="city"
                value={city}
                placeholder="Insira a Cidade"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country_state">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                className="input-control"
                as="select"
                name="country_state"
                value={country_state}
                placeholder="Escolha o Estado"
                onChange={handleInputChange}
              >
                <SelectOptions
                  options={country_state_OPTIONS}
                />
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId="birth_date">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="birth_date"
            value={birth_date}
            placeholder="Insira a data de nascimento"
            onChange={handleInputChange}
          >
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CostumerForm;