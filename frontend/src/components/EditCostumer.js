import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import CostumersContext from '../context/CostumersContext';
import CostumerForm from './CostumerForm';

const EditCostumer = ({ history }) => {
  const { costumers } = useContext(CostumersContext);
  const { id } = useParams();
  const costumerToEdit = costumers.find((costumer) => costumer.id === id);

  const handleOnSubmit = (costumer) => {
    // const filteredCostumers = costumers.filter((costumer) => costumer.id !== id);
    // setCostumers([costumer, ...filteredCostumers]);
    history.push('/');
  };

  return (
    <div>
      <CostumerForm costumer={costumerToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCostumer;