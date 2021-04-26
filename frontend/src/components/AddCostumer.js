import React from 'react';
import CostumerForm from './CostumerForm';

const AddCostumer = () => {
  const handleOnSubmit = (costumer) => {
    console.log(costumer);
  };

  return (
    <React.Fragment>
      <CostumerForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCostumer;