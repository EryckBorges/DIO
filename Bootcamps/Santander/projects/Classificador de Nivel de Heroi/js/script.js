// Variaveis
let nome = prompt("Qual o nome do seu personagem?");
let xp = Number(prompt("Seu personagem pode ter xp entre 0 e 10.001, quanto xp ele terá?"));

// Estruturas de Repetição para verificação de possiveis erros, como o de não digitar o nome para o personagem e nem seu xp
while (nome == null || nome == '') {
    nome = prompt("Qual o nome do seu personagem?");
}

while (xp == null || xp == '') {
    xp =  Number(prompt("Seu personagem pode ter xp entre 0 e 10.001, quanto xp ele terá?"));;
}

// Categorias possiveis
let categorias = [
    "Ferro ⛓️", "Bronze 🥉", "Prata 🥈", "Ouro 🥇", "Platina ⚔️",
    "Ascendente 🧙‍♂️", "Imortal 💀", "Radiante ✨"
];

// Verificador de categoria 
let categoria = 0;

// Estrutura de Decisão para decidir em qual categoria o personagem se enquadra
if (xp < 0 || xp > 10001 || isNaN(xp)) {
alert("XP inválido! Coloque um número entre 0 e 10.001.");
} else if (xp < 1000) {
categoria = 0;
} else if (xp < 2000) {
categoria = 1;
} else if (xp < 5000) {
categoria = 2;
} else if (xp < 7000) {
categoria = 3;
} else if (xp < 8000) {
categoria = 4;
} else if (xp < 9000) {
categoria = 5;
} else if (xp < 10000) {
categoria = 6;
} else {
categoria = 7;
}

// Exibe o nome do personagem e sua categoria
alert(`O Herói de nome ${nome} está no nível de ${categorias[categoria]}`);