const acender = document.querySelector('#Acender'); 
const apagar =document.querySelector('#Apagar');
const lampada = document.querySelector('#lampada');


acender.addEventListener('click',()=>{

    lampada.src='files/acesa.gif';//acende a lampada

});

apagar.addEventListener('click',()=>{

    lampada.src='files/apagada.gif';//apagar a lampada
});

lampada.addEventListener('dblclick',()=>{
    lampada.src='files/quebrada.jpg';//quebra a lampada
});