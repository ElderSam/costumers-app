/* handle all http requests */

import axios from "axios";

const baseUrl = "http://localhost:3333/"; // backend (API)

const CostumerAPI = (url = baseUrl + 'costumers/') => {

    const axiosPut = (id, updateRecord) => {
        const keys = Object.keys(updateRecord)
        const values = Object.values(updateRecord)
        let str = '';

        for(let i=0; i<keys.length; i++) {
            if( i=== 0) {
                str += '?';
            }else {
                str += '&';
            }

            str += `${keys[i]}=${values[i]}`;
        }

        return axios.put(url + id + str)
    }

    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updateRecord) => axiosPut(id, updateRecord),
        delete: id => axios.delete(url + id)
    }
}

export default CostumerAPI;