import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CostumerContext } from '../context/index';
import CostumerForm from './CostumerForm';

const EditCostumer = ({ history }) => {
  const appContext = useContext(CostumerContext);
  const { costumers } = appContext;

  const { id } = useParams();
  const costumerToEdit = costumers.find((costumer) => costumer.id === parseInt(id));

  const handleOnSubmit = (costumer) => {
    appContext.update(id, costumer, history);
  };

  return (
    <div>
      <CostumerForm costumer={costumerToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCostumer;