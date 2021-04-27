import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

import {
  marital_status_OPTIONS, country_state_OPTIONS } from './form/OptionValues';
import SelectOptions from './form/SelectOptions';

const CostumerForm = (props) => {

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

    let allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if(CPF.length !== 11) {
      allFieldsFilled = false;
      errorMsg = 'CPF inválido'
    }

    if (allFieldsFilled) {
      const costumer = {
        name,
        birth_date,
        marital_status,
        CPF,
        city,
        country_state
      };
      props.handleOnSubmit(costumer);
    } else {
      if(errorMsg === '')
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