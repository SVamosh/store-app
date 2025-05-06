
const BASE_URL = 'https://fakestoreapi.com/products';

export const getApiData = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
};
