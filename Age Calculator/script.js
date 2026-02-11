const button =document.getElementById("button")
const dateI =document.getElementById("dateI")
const idade =document.getElementById("idade")
//ESTOU PEGANDO A DATA ATUAL
let dat= new Date()
//ESTOU PEGANDO SOMENTE O ANO
let ano_atual=dat.getFullYear()
// PEGA SOMENTE O VALOR DENTRO DE INPUT
let date =dateI.value
const [ano,mes,dia]=date.split('-')

let age=0;
button.addEventListener('click',()=>{
   
 age = ano_atual-ano
    
idade.innerText=`Your Age is ${age} Years old`
})