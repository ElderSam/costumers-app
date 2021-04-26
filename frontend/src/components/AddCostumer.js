import React from 'react';
import CostumerForm from './CostumerForm';

const AddCostumer = ({ history, costumers, setCostumers }) => {
  const handleOnSubmit = (costumer) => {
    setCostumers([costumer, ...costumers]); // add new costumer
    history.push('/');
  };

  return (
    <React.Fragment>
      <CostumerForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCostumer;