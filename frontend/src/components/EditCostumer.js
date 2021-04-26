import React from 'react';
import CostumerForm from './CostumerForm';
import { useParams } from 'react-router-dom';

const EditCostumer = ({ history, costumers, setCostumers }) => {
  const { id } = useParams();
  const costumerToEdit = costumers.find((costumer) => costumer.id === id);

  const handleOnSubmit = (costumer) => {
    const filteredCostumers = costumers.filter((costumer) => costumer.id !== id);
    setCostumers([costumer, ...filteredCostumers]);
    history.push('/');
  };

  return (
    <div>
      <CostumerForm costumer={costumerToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCostumer;