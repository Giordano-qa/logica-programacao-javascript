
let precos = [10, 50, 30, 80, 20];

let maiorPreco = precos[0];


for (let i = 0; i < precos.length; i++) {
    if (precos[i] > maiorPreco) {
        maiorPreco = precos[i]; 
    }
}
console.log(`O maior preço da lista é: ${maiorPreco}`);