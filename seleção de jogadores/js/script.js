const cr7 = document.querySelector('#chris');
const ronald = document.querySelector('#ronaldo');
const ney = document.querySelector('#neymar');
const jogadores = document.querySelector('#images');

cr7.addEventListener('click',()=>{

   jogadores.src='files/Sem título.jpg';


});

ronald.addEventListener('click',()=>{

jogadores.src='files/Sem títulor.jpg';

})

ney.addEventListener('click',()=>{
    jogadores.src='files/images.jpg';
})