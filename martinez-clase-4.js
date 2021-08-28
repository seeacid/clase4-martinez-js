let producto1 = prompt("valor del producto 1")
let producto2 = prompt("valor del producto 2")
let producto3 = prompt("valor del producto 2")
let efectivo = confirm("Paga en efectivo?")
let gastos = 0


function sumar() {
    return parseInt(producto1)+parseInt(producto2)+parseInt(producto3)
}

gastos=sumar()

function iva(valor){

   return valor * 0.21
}

let valor_iva = iva(gastos)

function total(){

    if(efectivo==true){
        alert("El valor de su compra es de: $"+gastos+ "\n el costo de impuestos de la compra es: $"+valor_iva+"\n El monto total a pagar es (10% off por pago en efectivo): $"+((gastos+valor_iva)*0.9)) 
    }
    else{

        alert("El valor de su compra es de: $"+gastos+ "\n el costo de impuestos de la compra es: $"+valor_iva+"\n El monto total a pagar es: $"+(gastos+valor_iva))
    }

    
}

total()


