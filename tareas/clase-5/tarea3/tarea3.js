


document.querySelector("#tiempo-total").onclick = function (){
    const horas = document.querySelector("#horas").value;
    const minutos = document.querySelector("#minutos").value;
    const segundos = document.querySelector("#segundos").value;
    const lista = document.querySelector("ul")
    const item = document.createElement("li")
    let tiempoTotal;
       if (Number(horas) < 24) {
           tiempoTotal = horas 
       }else {
        alert("Ingrese en el formato indicado")
        return false
    }
       if ( Number(minutos) < 60){
           tiempoTotal += `:${minutos}`
       }else {
        alert("Ingrese en el formato indicado")
        return false
    }    
       if(Number(segundos) < 60){
           tiempoTotal += `:${segundos}`
           lista.appendChild(item)
           item.textContent = tiempoTotal
       }else {
           alert("Ingrese en el formato indicado")
           return false
       }
    
    
   
    
 
   }
 