import {increment, getCounter} from './counter.js';

const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');



//Esto 3es un comentrario

const sumar = ()=>{
    increment();
    parrafo.innerText = `La cuenta va en ${getCounter()}`;
}

boton.addEventListener('click', sumar);