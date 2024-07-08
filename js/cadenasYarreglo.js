class cadenaArreglo{

    concatenar(){
        /* let palabra=" hola"
         let letra= " que tal"
         let frase =""
         frase=palabra+letra
         console.log(frase);*/  
         let palabra= document.getElementById("palabra").value
         let frase = document.getElementById("frase").value
         let nueva= " "
         nueva = palabra.toString() +" "+ frase+""
         let resp=document.getElementById("resp")
         resp.textContent=`el resultado es : ${nueva}`
    }
    
    Buscar_SubCadena() {
       
      let cadena = document.getElementById("cadena").value;
      let subcadena = document.getElementById("subcadena").value;
      let expresion = new RegExp(subcadena);
      let pos = cadena.search(expresion);
            if (pos !== -1) {
                document.getElementById("resultado").innerHTML = "La subcadena fue encontrada en la posición " + pos;
            } else {
                document.getElementById("resultado").innerHTML = "La subcadena no fue encontrada";
            }
        
    }

    insertarSubcadena() {
      let cadenaOriginal = document.getElementById("cadenaOriginal").value;
      let subcadena = document.getElementById("subcadena").value;
      let posicion = parseInt(document.getElementById("posicion").value);
  
      if (posicion < 0 || posicion > cadenaOriginal.length) {
          alert("La posición de inserción no es válida.");
          return;
      }
  
      let nuevaCadena = cadenaOriginal.slice(0, posicion) + subcadena + cadenaOriginal.slice(posicion);
  
      document.getElementById("resultado").innerText = "Cadena resultante: " + nuevaCadena;
      }
      
      eliminarSubcadena() {
        let cadenaOriginal = document.getElementById('cadenaOriginal').value;
        let subcadenaEliminar = document.getElementById('subcadenaEliminar').value;
      
        let resultado = cadenaOriginal.replace(subcadenaEliminar, '');
      
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
      }
      
      convertirACadena() {
        let arregloInput = document.getElementById('arregloInput').value;
        let arreglo = arregloInput.split(',').map(function(item) {
          return item.trim(); 
        });
      
        let cadenaResultado = '"' + arreglo.join(', ') + '"';
      
        document.getElementById('resultado').innerText = 'Resultado: ' + cadenaResultado;
      }
      
      encontrarMayor() {
        let numerosInput = document.getElementById('numerosInput').value;
        let numeros = numerosInput.split(',').map(function(item) {
          return parseFloat(item.trim()); 
        });
      
        if (numeros.some(isNaN)) {
          alert("Por favor, ingrese solo números válidos.");
          return;
        }
      
        let mayor = Math.max(...numeros);
      
        document.getElementById('resultado').innerText = 'El mayor es: ' + mayor;
    }
      
    buscarEnArreglo() {
        let arregloInput = document.getElementById('arregloInput').value;
        let arreglo = arregloInput.split(',').map(function(item) {
          return parseInt(item.trim()); 
        });
      
        let elementosBuscarInput = document.getElementById('elementosBuscar').value;
        let elementosBuscar = elementosBuscarInput.split(',').map(function(item) {
          return parseInt(item.trim()); 
        });
      
        let posiciones = elementosBuscar.map(function(elemento) {
          return arreglo.indexOf(elemento);
        });
      
        document.getElementById('resultado').innerText = 'Posiciones: ' + posiciones.join(', ');
    }
      
    insertarEnArreglo() {
        let arregloInput = document.getElementById('arregloInput').value;
        let arreglo = arregloInput.split(',').map(function(item) {
          return parseInt(item.trim()); 
        });
      
        let posicionInsertar = parseInt(document.getElementById('posicionInsertar').value);
        let elementoInsertar = parseInt(document.getElementById('elementoInsertar').value);
      
        if (isNaN(posicionInsertar) || posicionInsertar < 0 || posicionInsertar > arreglo.length) {
          alert("La posición de inserción no es válida.");
          return;
        }
      
        arreglo.splice(posicionInsertar, 0, elementoInsertar);
      
        document.getElementById('resultado').innerText = 'Arreglo después de la insertar: ' + arreglo.join(', ');
    }
      
    eliminarDeArreglo() {
        let arregloInput = document.getElementById('arregloInput').value;
        let  arreglo = arregloInput.split(',').map(function(item) {
          return parseInt(item.trim()); 
        });
      
        let elementoEliminar = parseInt(document.getElementById('elementoEliminar').value);
      
        arreglo = arreglo.filter(function(elemento) {
          return elemento !== elementoEliminar;
        });
      
        document.getElementById('resultado').innerText = 'Arreglo después de la eliminación: [' + arreglo.join(', ') + ']';
    }
      
    convertirAArreglo() {
        let cadena = document.getElementById('cadenaInput').value;
      
        let arreglo = cadena.split(',');
      
        let arregloConComillas = arreglo.map(function(elemento) {
          return '"' + elemento + '"';
        });
      
        document.getElementById('resultado').innerText = 'Arreglo resultante: [' + arregloConComillas.join(', ') + ']';
    }
      
   
}
    

let cad = new cadenaArreglo ();
//cad.concatenar()
//cad.Buscar_SubCadena()
//cad.insertarSubcadena()
//cad.eliminarSubcadena()
//cad.convertirACadena() 
//cad.encontrarMayor()
//cad.buscarEnArreglo()
//cad.insertarEnArreglo()
//cad.eliminarDeArreglo()
//cad.convertirAArreglo()