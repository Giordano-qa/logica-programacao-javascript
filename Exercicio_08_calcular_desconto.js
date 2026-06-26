function calcularMedia(num1, num2, num3) {
    let soma = num1 + num2 + num3;
    let media = soma / 3;
    
    return media;
} 

let resultadoFinal = calcularMedia(10, 20, 30);

console.log(`A média dos números é: ${resultadoFinal}`);