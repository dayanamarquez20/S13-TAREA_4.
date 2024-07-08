function base10Base16(numero) {
    const letras16 = ["A", "B", "C", "D", "E", "F"];
    const base = 16;
    let residuo, digito, base16 = "";
    
    while (numero > 0) {
        residuo = numero % base;
        if (residuo > 9) {
            digito = letras16[residuo - 10];
        } else {
            digito = residuo.toString();
        }
        base16 = digito + base16;
        numero = Math.trunc(numero / base);
    }
    
    return base16;
}

// Ejemplo de uso:
let numero = 255;
let resultado = base10Base16(numero);
console.log("El número en base 16 es: " + resultado);
