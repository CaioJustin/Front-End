let button = document.querySelector('#button');
let quantidade = document.querySelector('#quantidade');
let bateria = document.querySelector('#bateria');

let cor
let Quantidade_de_bateria;
button.addEventListener('click',()=>{
 cor = quantidade.value;
   Quantidade_de_bateria=quantidade.value+"%";
   

   if(cor >50){
    bateria.style.background="green";
   }else if (cor <50 && cor>25){
    bateria.style.background="yellow";
   }else if (cor<25) {
    bateria.style.background="red";
   }
  
     bateria.style.width=Quantidade_de_bateria;

})