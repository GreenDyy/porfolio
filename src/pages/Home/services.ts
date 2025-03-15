import axios from 'axios';

export const getProfleByUsername = async (id: number) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/test/get-profile-by-id/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export const helloName = async (name: string) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/test/hello-name?name=${name}`, {
        headers: {
            'Content-Type': 'application/json'  
        }
    });
    return response.data;
}

