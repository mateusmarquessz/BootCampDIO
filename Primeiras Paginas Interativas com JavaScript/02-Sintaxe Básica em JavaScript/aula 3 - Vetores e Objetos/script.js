//O que sao vetores ou arrays

//como declarar um aray

//let array = ['String', 1 , true];
//console.log(array);
/*
let array = ['String', 1, true ['array1'], ['array2'] ,['array3']];
console.log(array[0]); //retornando do vetor

//Como manipular array/ vetor

//ForEach
array.forEach(function(item, index){console.log(item, index)}); //Repete para cada item ou index dentro de um array

//Push
array.push('novo item');//Add um novo item no final do array
console.log(array);

//pop
array.pop(); //Remove o ultimo item no final do array
console.log(array);

//shift
array.shift(); //Remove o primeiro item no final do array
console.log(array);

//unshift
array.unshift('novo item no inicio'); //Add um novo item no inicio do array
console.log(array);

//indexOF
console.log(array.indexOf(true)); // Fala a posicao do array

//splice
array.splice(0, 3); // Apaga o valor dentro da array conforme for colocado sobre o paramentro
console.log(array);
//Slice
let novoArray = array.slice(0, 3); // Pega somente os index indicados para um novo array
console.log(array);*/

let object = { String: 'String', number: 1, Boolean: true, array: ['array'], objectInterno: { objectInterno: 'ObjetoInterno'}}; //declarando objeto


console.log(object.Boolean);// imprimindo

var string = object.String; // acessando o string dentro do object
console.log(string);

var arrayInterno = object.array;//acessando o array dentro do object
console.log(arrayInterno);

var {String, Boolean, objectInterno} = object; //acessando todos os elementos do object
console.log(String, Boolean, objectInterno);