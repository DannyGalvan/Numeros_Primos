import { esPrimo, render, primos } from "./primalidad.js";
import { row, tableSpinner } from "./componentes.js";


const formulario = document.getElementById('rango')
const unico = document.querySelector('#unico')
const serie = document.querySelector('#serie')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inicio = parseInt(e.target.inicio.value);
    const final = parseInt(e.target.fin.value);
    renderTable(inicio, final);
})

document.querySelector('#borrar').addEventListener('click', ()=>{
    resetTable();
})

unico.addEventListener('submit', (e)=>{
    e.preventDefault();
    const respuesta = document.querySelector('#respuesta');
    const numero = parseInt(e.target.numero.value);
    let primo = esPrimo(numero);

    if (isNaN(numero)) {
        respuesta.innerHTML = `<p class="text-danger">Ingrese un numero valido</p>`
        return
    }

    if (primo != 0) {    
        respuesta.innerHTML = `<p class="text-success">El Numero ${primo} Es Un Primo</p>`
    }else{
        respuesta.innerHTML = `<p class="text-primary">El Numero ${numero} No Es Un Primo</p>`
    }
})

serie.addEventListener('submit', (e)=>{
    e.preventDefault();
    const serieNumeros = e.target.numeros.value.split(',');
    const primos = render(serieNumeros);
    renderTableSerie(primos)
})


const renderTable = (inicio, final)=>{
    let numeros;
    
    if (isNaN(inicio) || isNaN(final) || inicio < 0 || final <= 0 ) { 
       numeros = primos();
    }else{
        numeros = primos(inicio, final)
    }
    console.log(numeros);
    const filas = row(numeros);

    const tabla = document.querySelector('#tabla tbody')
    tabla.innerHTML = ''
    tabla.innerHTML = tableSpinner(); 
    setTimeout(()=>{
        tabla.innerHTML = ''
        tabla.append(...filas);
    },2000)
}

const resetTable = ()=>{
    const tabla = document.querySelector('#tabla tbody')
    tabla.innerHTML = ''
}

const renderTableSerie = (data) =>{
    const mensaje = document.querySelector('#mensaje');

    if (data.length <= 0) {
         mensaje.innerHTML = `<p class="text-danger">No hay ningun numero Primo</p>`
        return
    }

    if (data.length > 0) {
        mensaje.innerHTML = `<p class="text-success">La Tabla de abajo tiene tus resultados</p>`
        const filas = row(data);

        const tabla = document.querySelector('#tabla tbody')
        tabla.innerHTML = ''
        tabla.innerHTML = tableSpinner(); 
        setTimeout(()=>{
            tabla.innerHTML = ''
            tabla.append(...filas);
        },2000)
    }

    
}




