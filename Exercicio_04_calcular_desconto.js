let preco1 = 50;
let preco2 = 30;
let preco3 = 20;

let valorTotal = preco1 + preco2 + preco3;

let valorDesconto = valorTotal * 0.10;
let valorFinal = valorTotal - valorDesconto;


console.log(`O valor total com 10% de desconto é: R$ ${valorFinal}`);
