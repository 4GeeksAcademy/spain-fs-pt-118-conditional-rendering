import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


let age = 10

const arr = ['lola', 'pepe']

const name = ''


// && -> y ---> ambas condiciones tienen que ser true para que se resuelva true
// || -> o ---> con que de una de las condiciones sea true, se resuelve true


const resp = document.querySelector("#respuesta");
resp.innerHTML = age>21 ? 'puede manejar' : 'no puedes manejar' 
resp.innerHTML = name  || "usuario"
resp.innerHTML = arr && arr[1] || 'no hay nombres en el array'

let linkedinUser = 'javierseiglie'
let linkedinUrl = 'https:www.linkedin.com/in/'+username
let githubUser = 'jseiglie'
let githubUrl = 'https://www.github.com/'+githubUser
/* 

ternaria, esquelto/syntaxis 

            se ejecuta si se cumple la condicion      se ejecuta si no se cumple la condicion (else)
condicion ? true                                    : false
age>10    ? console.log('es mayor de 10 años)       : console.log('eres mu chico')

age>16 && age<21 ? 
age>16 && age<21  || age>20 ? 

*/