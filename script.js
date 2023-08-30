// 01 - crie uma condição composta com uma variável 
// dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
const dia = true
if (dia) {
    console.log("Claro")
} else {
    console.log("Está de noite")
}

// 02 - Crie um loop for() que exiba apenas números pares no console.log()
for (let n = 0; n <= 30; n += 2) {
    console.log(n)
}

// 03 - crie uma função que exiba uma mensagem no console
function aviso() {
    console.log("Estamos aprendendo Java Script na Vai Na Web")
}
aviso()

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mostrarNome(nome) {
    console.log(`Meu nome é ${nome}`)
}
mostrarNome("Ricardo da Silva Tavares")

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function mostrarNome(nome, idade, estiloMusicalPreferido) {
    console.log(`Meu nome é ${nome} tenho ${idade} anos e adoro ${estiloMusicalPreferido}`)
}
mostrarNome("Ricardo da Silva Tavares", 46, "Rock internacional")

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function hobbies(filme, música) {
    console.log(`Meu filme favorito é ${filme} e a minha música preferida é ${música} `)
}
hobbies("Lutador de rua", "In the End")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triple(num) {
    return num * 3
}
console.log(triple(3))

// 08 - crie uma função que  verifique se uma  variável é true ou false
function verifica(numero) {
    if (numero >= 309) {
        console.log(true)
    } else {
        console.log(false)
    }
} verifica(909)

// 09 - Crie um array que receba 5 itens e exiba no console.
const lista = ["Bombom", "Bolo", "Mousse", "Chocolate", "Cacau"]
console.log(lista);

// 10 - Utilize um método para adicionar um nome ao inicio do array.unshift
const feira = ["tomate", "batata", "cenoura", "cebola"]
feira.unshift("salsa")
console.log(feira)

// 11 - Utilize um método para remover o último nome do array.pop
const turma = ["Ricardo", "Tatiana", "Miguel", "João", "Maria", "José", "Felipe"]
turma.pop()
console.log(turma)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.push
const empresa = ["cargo", "matrícula", "turno"]
empresa.push("salário", "endereço")
console.log(empresa)

// 13 - Utilize um método para remover o primeiro nome do array.shift
const salgados = ["coxinha", "quibe", "pastel", "empada", "risole"]
salgados.shift()
console.log(salgados)

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numbers.sort()
console.log(numbers)

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
let personalidade = { coragem: "Na maioria das vezes", resiliência: "Quando necessária", perseverança: "Vamos que ver no que dá!" }
console.log(personalidade);

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
let personalidades = { coragem: "Na maioria das vezes", resiliência: "Quando dá a gente tenta", perseverança: "Vamos que ver no que dá!" }
personalidades.determinação = "Esse aí é brabo quando quer."
console.log(personalidades)

// 17 - Remova uma propriedade desse objeto.

let sacolao = { frutas: "laranja morango banana", verduras: "alface agrião brócolis", legumes: "batata tomate cenoura " }
console.log(sacolao)
delete sacolao.frutas
console.log(sacolao)

// 18 - Mostre no console todas as propriedades desse objeto.

let estoqueDeCarros = { ano: 2024, placa: "XYK-203E", marca: "Ford", modelo: "Ranger" }
let propriedades = Object.keys(estoqueDeCarros)
console.log(propriedades)

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
    { nome: "Ricardo", idade: 46, telefone: "(21)99980-0098", amigos: ["Carroça","Salada","Dedos","Corola"] },
    { nome: "Robson", idade: 29, telefone: "(21)99380-0098", amigos: ["Colado","Sabão","Cascão","Moneró","Cavado"] },
    { nome: "Renato", idade: 30, telefone: "(21)93580-0098", amigos: ["Galgo","Linguiça","Box","Broca"] },
    { nome: "Rubio", idade: 23, telefone: "(21)92980-0098", amigos: ["Chico","Ziza","Foca","Rato"] },
    { nome: "Reinaldo", idade: 56, telefone: "(21)93480-0098", amigos: ["Comando","Lombo","Costela","Voo"] }
];

console.log(cadastro)



// 20 - Mostre no console o nome de um amigo de cada lista.
let cadastro1 = [
    { nome: "Ricardo", idade: 46, telefone: "(21)99980-0098", amigos: ["Carroça","Salada","Dedos","Corola"] },
    { nome: "Robson", idade: 29, telefone: "(21)99380-0098", amigos: ["Colado","Sabão","Cascão","Moneró","Cavado"] },
    { nome: "Renato", idade: 30, telefone: "(21)93580-0098", amigos: ["Galgo","Linguiça","Box","Broca"] },
    { nome: "Rubio", idade: 23, telefone: "(21)92980-0098", amigos: ["Chico","Ziza","Foca","Rato"] },
    { nome: "Reinaldo", idade: 56, telefone: "(21)93480-0098", amigos: ["Comando","Lombo","Costela","Voo"] }
];

console.log(cadastro1[0].amigos[0]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[0]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[0]);









//array [] colchetes
//lista de dados
// coleção de dados;
//estrutura que você pode estar armazenando mais de um dado;
// array é acessado pelo index(posição)
// let numero = [1, 2, 5, 8];
// console.log(numero);

// objeto {} chaves
// coleção de propriedades;
// nome(chave): valor;
// objeto é acessado pelo nome(chave)
// let salada = {
//   ingredientes: ["tomate", "batata", "alface"],
//   tempero: "vinagre"
// };
// console.log(salada);

// // array com objeto
// let playYoutube = [
//   {
//     nome: "José",
//     idade: 70,
//     gostoMusical: ["blus", "Jazz", "hip-hop"]
//   },
//   {
//     nome: "Manoela",
//     idade: 32,
//     gostoMusical: ["K-pop", "axé", "pagode"]
//   }
// ];
// // Manoela gosta de K-pop
// console.log(
//   `${playYoutube[1].nome} gosta de ${playYoutube[1].gostoMusical[0]}`
// );

// playYoutube.push({
//   nome: "Tatiana",
//   idade: 47,
//   gostoMusical: ["gospel", "sertanejo", "música classica"]
// });

// console.log(playYoutube);

// // Laços de repetição:
// //Loops
// // for()

// // retornar numeros de 0 a 10;
// for (let n = 0; n <= 10; n++) {
//   console.log(n);
// }

// //retornar de 10 a 0;
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// //retornar numeros pares até 12;
// for (let i = 2; i <= 12; i += 2) {
//   console.log(i);
// }

// //retornar numeros de 10 em 10 até 100;
// for (let i = 10; i <= 100; i += 10) {
//   console.log(i);
// }

// // função

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "Você gosta do céu!";
//   } else if (cor === "verde") {
//     return "Você gosta de mato!";
//   } else {
//     return "Você gosta de outra cor!";
//   }
// }

// console.log(corFavorita("amarelo"));
// console.log(corFavorita("azul"));

// // for (let i = 0; i<= 12; i++){
// // if (i % 2 === 0) {
// //     console.log(i);
// //     }
// // }















