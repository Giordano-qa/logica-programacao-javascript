function verificarPrimo(numero) {
    if (numero <= 1) {
        return "Não é primo";
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "Não é primo";
        }
    }
    return "É primo";
}
console.log(`O número 7: ${verificarPrimo(7)}`);  
console.log(`O número 10: ${verificarPrimo(10)}`); 