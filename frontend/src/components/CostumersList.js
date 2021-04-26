import React, { useContext } from 'react';
import _ from 'lodash';

import { CostumerContext } from '../context/index';
import Costumer from './Costumer';

const CostumersList = () => {
  const appContext = useContext(CostumerContext);
  const { loading, costumers, Delete } = appContext

  const handleRemoveCostumer = (id) => {
    Delete(id)
  };

  return (
    <React.Fragment>
      <div className="costumer-list">
      {loading ? <h1 className="text-center">...carregando clientes</h1> :
        !_.isEmpty(costumers) ? (
          costumers.map((costumer) => (
            <Costumer key={costumer.id} {...costumer} handleRemoveCostumer={handleRemoveCostumer} />
          ))
        ) : (
          <p className="message">Nenhum cliente cadastrado. Por favor adicione algum cliente.</p>
        )
      }
      </div>
    </React.Fragment>
  );
};

export default CostumersList;