import { URL_API } from './api';
import { handleResponse } from './handle-response';

export const apiService = {
    getAll,
};

function getAll(featured, agencyType, countryCode) {
    const requestOptions = { 
        method: 'GET', 
    };

    return fetch(`${URL_API.BASE}/agencies/?featured=${featured}&agency_type=${agencyType}&country_code=${countryCode}&ordering=name`, requestOptions).then(handleResponse);
}
