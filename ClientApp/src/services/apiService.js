import axios from 'axios';
import Swal from 'sweetalert2';


const API_URL = 'http://localhost:5150/api/encuesta';

const apiService = {
    getEncuestas: async (token) => {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    getEncuestaByID: async (token, id) => {
        const response = await axios.get(API_URL + "/" + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    getResuyltadosByID: async (token, id) => {
        const response = await axios.get(API_URL + "/GetResultados/" + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
    postVotacion: async (token, obj) => {
        try {
            const response = await fetch(API_URL + '/voto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(obj),
            });

            if (!response.ok) {
                throw new Error('Error al grabar voto');
            }
            const data = await response.json();
            Swal.fire({
                icon: 'success',
                title: 'OK',
                text: 'Se grabó tu voto!',
                showConfirmButton: false,
                timer : 1000
,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al registrar voto',
            });
            alert();
        }
    }
}
export default apiService;