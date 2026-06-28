function contarVogais(frase) {
    let contadorVogais = 0;
    let fraseMinuscula = frase.toLowerCase();
    let vogais = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < fraseMinuscula.length; i++) {
        let letraAtual = fraseMinuscula[i];

        if (vogais.includes(letraAtual)) {
            contadorVogais++;
        }
    }
    return `A frase contém ${contadorVogais} vogais.`;
}
let minhaFrase = "Aprender Javascript e muito legal";
console.log(contarVogais(minhaFrase));