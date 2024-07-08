class Numero {
  

  calcularDivisores() {
    let inputNumber = document.getElementById('numberInput').value;
    let num = parseInt(inputNumber);

    if (isNaN(num) || num <= 0) {
      alert('Por favor, ingrese un número entero positivo válido.');
      return;
    }

    let divisores = this.encontrarDivisores(num);
    
    document.getElementById('divisorsResult').innerHTML = 'Los divisores de ' + num + ' son: ' + divisores.join(', ');
  }

  encontrarDivisores(num) {
    let divisores = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisores.push(i);
      }
    }
    return divisores;
  }
  


esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
          return false;
      }
  }
  return numero !== 1;
}


  Perfecto(){
    let c = 1;
    let num = document.getElementById("num").value;
    let resp = document.getElementById("resp");
    let divisores = " ";
    let r = 0;
    num = parseInt(num);

    while (c < num) {
        if (num % c == 0) {
            r = r + c;
            divisores = divisores + " " + c.toString();
        }
        c = c + 1;
    }
    if (num == r){
    resp.innerHTML = `El número ${num} es perfecto. `;
   }else{
     resp. innerHTML= `El número ${num} no es perfecto.`;
   }
  }
  primogem() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resp = document.getElementById('resp');
    let r = 0;
    let primo1 = 1;
    let primo2 = 1;
    let c = 2;

    while (c < num1 && primo1 == 1) {
      r = num1 % c;
      if (r == 0) {
        primo1 = 0;
      } else {

        c = c + 1;
      }
    }

    c = 2;

    while (c < num2 && primo2 == 1) {
      r = num2 % c;
      if (r == 0) {
        primo2 = 0;
      } else {
        c = c + 1;
      }
    }

    if (primo1 == 1 && primo2 == 1 && Math.abs(num1 - num2) === 2) {
      resp.textContent = `Los números ${num1} y ${num2} son primos gemelos`;
    } else {
      resp.textContent = `Los números ${num1} y ${num2} no son primos gemelos`;
    }
  }
 
 esPrimo(numero) {
   for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
          return false;
      }
   }
   return numero !== 1;
 }

 verificarPrimo() {
    let numeroIngresado = document.getElementById('numeroInput').value;
    let numero = parseInt(numeroIngresado);

    let resultadoElemento = document.getElementById('resultado');

   if (!isNaN(numero)) {
      resultadoElemento.textContent = numero + (esPrimo(numero) ? ' es primo.' : ' no es primo.');
   }else {
      resultadoElemento.textContent = 'Por favor, ingrese un número válido.';
   }
 }

}



  
let number = new Numero();
//number.calcularDivisores()
//number.Perfecto()
//number.primogem()
//number.verificarPrimo()

