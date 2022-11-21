import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Yeezy Shoes",
    "price": 15000,
    "description": "A Yeezy Shoes before he canceled",
    "categoryId": 1,
    "images": ["https://exclusiveshopperu.com/wp-content/uploads/Adidas-Yeezy-700-Mauve-11.jpg"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))