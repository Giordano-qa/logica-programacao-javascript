function validarEmail(email) {
    if (email.includes("@")) {
        return "Email válido";
     } else {
        return "Email inválido";
    }
}

//console.log(validarEmail("giordanocaruso@gmail.com")); 
console.log(validarEmail("giordanogmail.com"));       