const offset= 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'


//manipula o sucesso
fetch(url)
    .then((response) => response.json()) //retorno da url
    .then((jsonBody) => console.log(jsonBody)) //retorno do primeiro then
    .catch((error) =>console.error(error))