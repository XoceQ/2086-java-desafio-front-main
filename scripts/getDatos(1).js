// URL base de la API
const baseURL = 'http://localhost:8080';

export default function getDatos(endpoint) {
    return fetch(`${baseURL}${endpoint}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error accessing endpoint /series/phrases', error);
        });
}