import React, { useContext } from 'react';
import _ from 'lodash';

import { CostumerContext } from '../context/index';
import Costumer from './Costumer';

import styles from './costumersList.module.scss';

const CostumersList = () => {
  const appContext = useContext(CostumerContext);
  const { loading, costumers } = appContext

  const handleRemoveCostumer = (id) => {
    appContext.Delete(id)
  };

  return (
    <React.Fragment>
      <div className={styles.costumerList}>
      {loading ? <h1 className="text-center">...carregando clientes</h1> :
        !_.isEmpty(costumers) ? (
          costumers.map((costumer) => (
            <Costumer key={costumer.id} {...costumer} handleRemoveCostumer={handleRemoveCostumer} />
          ))
        ) : (
          <p className={styles.message}>Nenhum cliente cadastrado. Por favor adicione algum cliente.</p>
        )
      }
      </div>
    </React.Fragment>
  );
};

export default CostumersList;