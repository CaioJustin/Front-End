let moneyI= document.getElementById('moneyI')
let  pocenI= document.getElementById('pocenI')
const  Button =document.getElementById('Button')
const  Money=document.getElementById('Money')




function Calcular(m,p){
    let valor = m*p
    return valor
}

Button.addEventListener('click',()=>{
    let m= moneyI.value;
let p = pocenI.value;


    let valor=Calcular(m,p);
    Money.innerText ="$"+valor
})

