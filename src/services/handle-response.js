export function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                window.location.reload(true);
            }
            // console.log(data)
            const error = (data && data.errors ? data.errors : data.errores && data.valor ? data : data.errores) /*|| response.statusText*/;
            return Promise.reject(error);
        }

        return data;
    });
}