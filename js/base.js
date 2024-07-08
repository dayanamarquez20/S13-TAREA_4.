class base {
    Base10_2() {
        let num = document.getElementById("datos").value;
        let binario = [];
        let binariofinal = [];
        let decimal = parseInt(num);
        let resp = document.getElementById("resp");

        while (decimal > 0) {
            let residuo = decimal % 2;
            binario.push(residuo);
            decimal = Math.floor(decimal / 2);
        }

        for (let i = binario.length - 1; i >= 0; i--) {
            binariofinal.push(binario[i]);
        }

        resp.textContent = `El número en base 10 (${num}) en base 2 es [${binariofinal}]`;
    }

    Base10_8() {
        let num = document.getElementById("datos").value;
        let octal = [];
        let octalfinal = [];
        let decimal = parseInt(num);
        let resp = document.getElementById("resp");

        while (decimal > 0) {
            let residuo = decimal % 8;
            octal.push(residuo);
            decimal = Math.floor(decimal / 8);
        }

        for (let i = octal.length - 1; i >= 0; i--) {
            octalfinal.push(octal[i]);
        }

        resp.textContent = `El número en base 10 (${num}) en base 8 es [${octalfinal}]`;
    }

    
    Base10_16() {
        let num = document.getElementById("datos").value;
        let hexadecimal = [];
        let hexadecimalFinal = [];
        let decimal = parseInt(num);
        let resp = document.getElementById("resp");

        // Conversión a hexadecimal
        while (decimal > 0) {
            let residuo = decimal % 16;
            hexadecimal.push(residuo);
            decimal = Math.floor(decimal / 16);
        }

        for (let i = hexadecimal.length - 1; i >= 0; i--) {
            let digito = hexadecimal[i];
            if (digito >= 10) {
                // Convertir números mayores o iguales a 10 a letras A-F
                hexadecimalFinal.push(`${digito.toString(16).toUpperCase()}`);
            } else {
                hexadecimalFinal.push(`${digito.toString(16).toUpperCase()}`);
            }
        }

        resp.textContent = `El número en base 10 (${num}) en base 16 es [${hexadecimalFinal.join('')}]`;
    }
    
    base2_base10() {
        let input = document.getElementById("binaryInput").value;
    
        // Validar si es un número binario
        if (/^[0-1]+$/.test(input)) {
            // Convertir de binario a decimal
            let decimal = parseInt(input, 2);
    
            // Mostrar el resultado
            document.getElementById("resultado").innerText = "El resultado en decimal es: " + decimal;
        } else {
            // Mostrar un mensaje de error si no es un número binario válido
            document.getElementById("resultado").innerText = "Por favor, ingrese un número binario válido.";
        }
    }
    
    base2_base8(){
        let inputElement = document.getElementById("binaryInput");
        let binario = inputElement.value;
    
        if (/^[01]+$/.test(binario)) {
            // Convertir a octal
            let octal = parseInt(binario, 2).toString(8);
    
            // Mostrar el resultado
            document.getElementById("resultado").innerHTML = "El equivalente en octal es: " + octal;
        } else {
            alert("Por favor, ingrese un número binario válido (solo 0s y 1s).");
        }
    }
    

    base2_base16() {
    // Obtener el número binario ingresado por el usuario
    let numeroBinario = document.getElementById("numeroBinario").value;

    // Validar que el número binario solo contenga 0s y 1s
    if (/^[0-1]+$/.test(numeroBinario)) {
        // Convertir a base 16 y a
        let resultadoHexadecimal = '[' + parseInt(numeroBinario, 2).toString(16).toUpperCase() + ']';

        document.getElementById("resultadoHexadecimal").textContent = resultadoHexadecimal;
    } else {
        alert("Por favor, ingrese solo 0s y 1s.");
    }
}


}

let arr = new base();
arr.Base10_2();
arr.Base10_8();
arr.Base10_16();
arr.base2_base10()
arr.base2_base8()
arr.base2_base16()



