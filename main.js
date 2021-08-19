//ENTIDADES. Creo el objeto, en este caso sera el cliente, para poder usar sus datos luego
class Clientes {
    constructor(nombre, apellido, year, phone, date, date2, noches, select, cuotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.year = year;
        this.phone = phone;
        this.date = date;
        this.date2 = date2;
        this.noches = noches;
        this.select = select;
        this.cuotas = cuotas;
    }
}
//VARIABLES. Declaro toda las variables, para luego obtener su valor



let clientes = [];
const precio = 1350
const iva = 1.21


//Comienzo a crear lo que seran las funcionalidades del simulador 

function validandoDatos(){

    

    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let year = document.querySelector("#year").value
    let phone = document.querySelector("#phone").value
    let date = new Date (document.querySelector("#date").value)
    let date2 = new Date (document.querySelector("#date2").value)

    //Creo el calculo dentro de las fucniones, porque al iniciarlizarlas fuera, me figuraba error.

    let miliSegundosDias = 24 * 60 * 60 * 1000
    let miliSegundosTranscurridos = Math.abs(date.getTime() - date2.getTime())
    let total = Math.round(miliSegundosTranscurridos/miliSegundosDias)


    let pagoEfectivo = precio * total;




    let p1 = document.createElement("p")
    p1.textContent = `NOMBRE: ${nombre}, APELLIDO: ${apellido}, EDAD: ${year} AÑOS, Nº DE CONTACTO: ${phone}`
    let p2 = document.createElement("p")
    p2.textContent = `FECHA DE INGRESO: ${date}, FECHA DE SALIDA: ${date2}, TOTAL DE NOCHES: ${total}, TOTAL: ${pagoEfectivo}`

    let div1 = document.createElement("div")

    div1.appendChild(p1)
    div1.appendChild(p2)

    let impreso = document.getElementById("resultados")
    impreso.appendChild(div1)
    
    
    clientes.push(new Clientes(nombre, apellido, year, phone, date, date2, total, pagoEfectivo))
    localStorage.setItem("clientes", JSON.stringify(clientes))



}

function recargo() {

    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let year = document.querySelector("#year").value
    let phone = document.querySelector("#phone").value
    let date = new Date (document.querySelector("#date").value)
    let date2 = new Date (document.querySelector("#date2").value)
    let cuotas = document.getElementById("cuotas").value


    let miliSegundosDias = 24 * 60 * 60 * 1000
    let miliSegundosTranscurridos = Math.abs(date.getTime() - date2.getTime())
    let total = Math.round(miliSegundosTranscurridos/miliSegundosDias)


    const uno = precio * iva;
    const dos = uno * total;
    const tres = dos / cuotas;


    let p3 = document.createElement("p")
    p3.textContent = `NOMBRE: ${nombre}, APELLIDO: ${apellido}, EDAD: ${year} AÑOS, Nº DE CONTACTO: ${phone}`
    let p4 = document.createElement("p")
    p4.textContent = `FECHA DE INGRESO: ${date}, FECHA DE SALIDA: ${date2}, CANTIDAD DE NOCHES: ${total}, A PAGAR ${cuotas} CUOTAS DE ${tres}`


    let div2 = document.createElement("div")
    div2.appendChild(p3)
    div2.appendChild(p4)

    let imprimir = document.querySelector("#resultados")
    imprimir.appendChild(div2)

    clientes.push(new Clientes(nombre, apellido, year, phone, date, date2, total, cuotas))
   localStorage.setItem("clientes", JSON.stringify(clientes))



}
 //CONDICIONALES
const mostrarCuotas = () =>{
    let select = document.getElementById("formasPago").value
    

    if(select == "efectivo"){
        $("#cuotas").hide()
    }else{
        $("#cuotas").show()
    }
}

const mostrar = () =>{
    let select = document.getElementById("formasPago").value
    
    if(select == "efectivo"){
        validandoDatos()
    }else{
        recargo()
    }
}


//EVENTOS
$("#formasPago").click(mostrarCuotas)
$("#btn").click(mostrar)

