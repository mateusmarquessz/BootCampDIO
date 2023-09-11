//Tipos Primitivos

//Boolean
var BooL = false;
console.log (typeof(BooL));

//Number
var numero = 1;
console.log(typeof(numero));

//String
var nome = 'mateus';
console.log(typeof(nome));

// O que sao variaveis sao dados que vaream
//Existem 3 maneira de declarar variaveis em JavaScript
//var - Escopo global e local, pode ter seu valora alterado, se nao tiver um valor inicial sera tradad como null

//let escopo local de bloco, pode ter seu valor alterado, se nao tiver um valor inicial sera tratada como null.

//Const - escopo local de bloco, somente leitura, o valor inicial e obrigatorio e nao pode ser alterado

//Declarando variaveis
var variavel= 'Robson'; // Era Robson
varaivel = 'claudio';//Mudou para claudio
console.log(typeof(variavel));

let variavel2 = 'Robson';// Era Robson
varaivel2 = 'claudio';//Mudou para claudio
console.log(typeof(variavel2));

const varaivel3 = 'Robson';// E Robson
varaivel3 = 'claudio';//Nao mudou para claudio
console.log(typeof(varaivel3));

//Escopo em JavaScript define a limitacao e visibilidade de um bloco de codigo

//Escopo Global - Quando a variavel e declarada fora de quialqer bloco, e sua visibilidade fica disponivel em todo codigo.

//Escopo Local -  Quando a variavel e declarada dentro de um bloco, sua visibilidade pode ficar disponivel ou nao.

//Exemplo

var EscopoGlobal = 'global';
console.log(EscopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//Atribuicao 

var Atribuicao = 'Diana'

//Comparacao
var Comparacao = '0' == 0; //Compara somente o valor
console.log(Comparacao);
//Comparacao identica
var comparacaoIdentica = '0' === 0; //Compara o valor e o Tipo da Variavel
console.log(comparacaoIdentica);

//Operadores aritmeticos
var adicao = 1+1;
console.log(adicao);

var subtracao = 1-1;
console.log(subtracao);

var multiplicacao = 2*3;
console.log(multiplicacao);

var divisaoreal = 6/3;
console.log(divisaoreal);

var divisaointeira = 6%3;
console.log(divisaointeira);

var pontenciacao = 2** 10;
console.log(pontenciacao);

//Operadores Relacionais

var maiorQue = 5>2;
console.log(maiorQue);

var menorQue = 5<2;
console.log(menorQue);

var maiorOuIgual = 5>=2;
console.log(maiorOuIgual);

var menorOuIgual = 5<=2;
console.log(menorOuIgual);

//Operadores logicos
var e = true && true;
console.log(e);

var ou = false || false;
console.log(ou);

var nao = !true;
console.log(nao);
