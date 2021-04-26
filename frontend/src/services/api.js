/* handle all http requests */

import axios from "axios";

const baseUrl = "http://localhost:3333/"; // backend (API)

const CostumerAPI = (url = baseUrl + 'costumers/') => {
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        delete: id => axios.delete(url + id)
    }
}

export default CostumerAPI;