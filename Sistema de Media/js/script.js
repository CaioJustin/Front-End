const first  = document.querySelector('#oneuni');
const second = document.querySelector('#twouni');
const third  = document.querySelector('#thirduni');
const resultado = document.querySelector('#resultado');
const Calcular= document.querySelector('#Calcular');
const nome = document.querySelector('#nome');


Calcular.addEventListener('click',()=>{

let n1,n2,n3=0;



n1=Number(first.value)
n2=Number(second.value)
n3=Number(third.value)

media=(n1+n2+n3)/3;
let situacao = '';
if(media >=5){
    situacao='aprovado';
}else if(media <=5){
    situacao='reprovado';
}
    //decidir qwuantas casas decimais vai arredonda toFixed(1) 1 signifca uma casa decimal 
resultado.textContent=`Sr(a)  ${nome.value} sua media final foi ${media.toFixed(1)} o seu Resultado foi ${situacao}`;

})