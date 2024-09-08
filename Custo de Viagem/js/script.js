const Calcular = document.querySelector('#Calcular');
const dv  = document.querySelector('#dv');
const rc = document.querySelector('#rc');
const pg =document.querySelector('#pg');
const custo = document.querySelector('#custo');

Calcular.addEventListener('click',()=>{

let dvv,rcc,pgg=0;

dvv=Number(dv.value);
rcc=Number(rc.value);
pgg=Number(pg.value);

valor = (dvv/rcc)*pgg;


custo.textContent =`O Custo da viagem e ${valor.toFixed(2)}`;
})