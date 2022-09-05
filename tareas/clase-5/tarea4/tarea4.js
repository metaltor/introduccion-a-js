//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
const seleccionarBody= document.querySelector("body");
const listaOrdenada = document.createElement("ol");
let numeroMayor = 0
let numeroMenor =0

seleccionarBody.appendChild(listaOrdenada);


document.querySelector("#enviar-numero").onclick = function agregarNumero (){
   
    const item = document.createElement("li");
    const texto = Number(document.querySelector("#numero").value) ;
    listaOrdenada.appendChild(item);
    item.textContent = texto;
    
}

document.querySelector("#calcular-promedio").onclick = function calcularSuma (){
    const texto = document.querySelectorAll("li");
    const promedio = document.querySelector("#promedio");
    let suma = 0
    let prom = 0

    for (let i = 0; i < texto.length; i++) {
       let numero =  Number(texto[i].textContent)
       suma = suma + numero
    }
      prom = suma/texto.length      
      promedio.textContent = `El promedio es ${prom}`
      
     }
     
    document.querySelector("#calcular-numero-mayor").onclick = function calcularNumeroMayor (){
        const texto = document.querySelectorAll("li");
        const lista = []
        let maximo = 0
            console.log(texto.textContent)
            for (let i = 0; i < texto.length; i++) {
            let numeros = Number(texto[i].textContent) 
            lista.push(numeros)
             console.log(lista)
            }
            
 
            for(let i=0;i<lista.length;i++){
                if(maximo < lista [i]){
                    maximo = lista [i];
                }
            }
            return document.querySelector("#mayor-numero").textContent = `El numero mayor ${maximo}`
     }
     
    
    document.querySelector("#calcular-numero-menor").onclick = function calcularNumeroMenor (){
        const texto = document.querySelectorAll("li");
        const lista = []
        
            console.log(texto.textContent)
            for (let i = 0; i < texto.length; i++) {
            let numeros = Number(texto[i].textContent) 
            lista.push(numeros)
             console.log(lista)
            }
            
            let minimo = lista[0]
            for(let i=0;i<lista.length;i++){
                if(lista [i] < minimo){
                    minimo = lista [i];
                }
            }
            return document.querySelector("#menor-numero").textContent = `El numero menor ${minimo}`
     }

     document.querySelector("#calcular-numero-repetido").onclick = function calcularNumeroMasRepetido (){
        const ingresoNumeros = document.querySelectorAll("li")
        const listaNumeros = []
        for (let i=0; i < ingresoNumeros.length; i++){
            let numeros = Number(ingresoNumeros[i].textContent)
            listaNumeros.push(numeros)       
        }
        let comparador;
        let cantRepeticiones =0
        for (i=0; i< listaNumeros.length; i++){
            comparador = listaNumeros[i];
            console.log(comparador)

        for (n=0; n< listaNumeros.length; n++)
        if(comparador === listaNumeros[n]){
            cantRepeticiones +=1
            console.log(`${comparador} se repite ${cantRepeticiones}` )
        }}

       console.log(listaNumeros)
     }

     const lista1 = [
        1,
        2,
        3,
        1,
        2,
        3,
        4,
        2,
        2,
        2,
        1,
        2,
      ];
      
      const lista1Count = {};
      
      lista1.map(
        function (elemento) {
          if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
          } else {
            lista1Count[elemento] = 1;
          }
        }
      );
      
      const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
          return elementoA[1] - elementoB[1];
        }
      );
      
      const moda = lista1Array[lista1Array.length - 1];