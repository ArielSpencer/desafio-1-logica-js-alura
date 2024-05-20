// DESAFIO 1
// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function botaoConsole() {
    console.log('O botão foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function botaoAlert() {
    console.log('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt() {
    let cidade = prompt('Que cidade você mora?')
    alert(`Eu estive em ${cidade} e lembrei de você!`)
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function botaoSoma() {
    let numero1 = parseInt(prompt('Digite 1 número'));
    let numero2 = parseInt(prompt('Digite outro número'));
    alert(`a soma de ${numero1} + ${numero2} é ${numero1 + numero2}`);
}

// DESAFIO 2
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function botaoIMC() {
    //Solicitar peso e altura
    let altura = prompt('Digite a altura em metros:');
    let peso = prompt('Digite o peso em kilogramas:');

    //Calcular e mostrar IMC
    let imc = peso / (altura * altura);
    alert(`o IMC é ${imc.toFixed(2)}`)
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let valorDolar = 4.8

function botaoDolar() {
    // Solicitar valor dolar
    let dolar = prompt('Digite o valor em dolares:');

    // Conversao em reais
    let reais = dolar * valorDolar;
    alert(`$${dolar} = R$${reais.toFixed(2)}`)
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function botaoAreaPerimetroRetangular() {
    // Solicitar altura e largura da sala
    let alturaSala = prompt('Qual a altura da sala?')
    let larguraSala = prompt('Qual a largura da sala?')

    // Converter área e o perimetro
    let areaSala = alturaSala * larguraSala;
    let perimetroSala = 2 * (alturaSala * larguraSala);

    // Mostrar resultados
    alert(`A área da sala é de ${areaSala}m2 e o perímetro é de ${perimetroSala}m`)
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function botaoAreaPerimetroCircular() {
    // Solicitar altura e largura do circulo
    let raioCirculo = prompt('Qual o raio do circulo?')

    // Converter área e o perimetro do circulo
    let areaCirculo = 3.14 * (raioCirculo * raioCirculo);
    let perimetroCirculo = 2 * 3.14 * raioCirculo;

    // Mostrar resultados
    alert(`A área da sala circular do raio de ${raioCirculo} é ${areaCirculo} e seu perímetro é de ${perimetroCirculo.toFixed(2)}`);
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
    // Criar lista para armazenar os resultados antes de exibir
let listaResultadosTabuada = [];

function botaoTabuada() {
    // Solicitar numero
    let numeroTabuada = prompt('Digite um número:');

    // Verificar se lista contem resultados anteriores e limpar lista
    if (listaResultadosTabuada != []) {
        listaResultadosTabuada = [];
    }

    // Calcular tabuada

    for (let i = 1; i <= 10; i++) {
        let resultadoTabuada = numeroTabuada * i;
        listaResultadosTabuada.push(` ${numeroTabuada} * ${i} = ${resultadoTabuada}`);
    }
    // Exibir resultados e limpar lista
    alert(listaResultadosTabuada)
}

// DESAFIO 3
// Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let listaLinguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
listaLinguagensDeProgramacao.push ('Java', 'Ruby', 'GoLang');

// Exibir todas as listas
function botaoExibirListas() {
    alert (`Lista Linguagens de Programação: ${listaLinguagensDeProgramacao} - Lista Nomes 1: ${listaNomesGenericos1} - Lista Nomes 2: ${listaNomesGenericos2} - Lista Nomes 3: ${listaNomesGenericos3}`);
}

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomesGenericos1 = ['Philips','Stanley','Coca-Cola'];

function botaoExibirElemento1ListaNomes1() {
    alert (listaNomesGenericos1[0]);
}

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaNomesGenericos2 = ['Starbucks','Café','Gold'];

function botaoExibirElemento1ListaNomes2() {
    alert (listaNomesGenericos2[1]);
}

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaNomesGenericos3 = ['Violão','Guitarra','Teclado'];

function botaoExibirUltimoElementoListaNomes3() {
    alert (listaNomesGenericos3[listaNomesGenericos3.length-1]);
}