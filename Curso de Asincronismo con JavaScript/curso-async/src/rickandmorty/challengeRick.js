import fetch from "node-fetch";
const API = 'https://rickandmortyapi.com/api';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const allCharac = async (urlApi) => {
    try {
        const character = await fetchData(`${urlApi}/character`);
        console.log(character);
    } catch (e) {
        console.error(e);
    }
}

const oneCharac = async (urlApi, num) => {
    try {
        const Ocharacter = await fetchData(`${urlApi}/character/${num}`);
        console.log(Ocharacter);
    } catch (e) {
        console.error(e);
    }
}

//allCharac(API);
oneCharac(API,2);
