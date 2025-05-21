let Mensagem = document.querySelector('#Mensagem');
let dia = document.querySelector('#dia');
let mes = document.querySelector('#mes');
let ano = document.querySelector('#ano');

let hora = document.querySelector('#hora');
let Minuto = document.querySelector('#Minuto');
let Segundo = document.querySelector('#Segundo');

setInterval(() => {
    let Hora_Completa = new Date();

    let day = Hora_Completa.getDate(); // Dia do mês
    let mount = Hora_Completa.getMonth() + 1; // Corrigindo mês
    let year = Hora_Completa.getFullYear();

    let hour = Hora_Completa.getHours();
    let minutes = Hora_Completa.getMinutes();
    let seconds = Hora_Completa.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if (day < 10) day = "0" + day;
    if (mount < 10) mount = "0" + mount;

    // Saudações com base na hora
    if (hour >= 0 && hour < 12) {
        Mensagem.textContent = 'Bom dia! ☀️';
    } else if (hour >= 12 && hour < 18) {
        Mensagem.textContent = 'Boa Tarde! 🌄';
        document.body.style.background = "url('file/R.png')";
    } else {
        Mensagem.textContent = 'Boa Noite! 🌕';
    }

    hora.textContent = hour;
    Minuto.textContent = minutes;
    Segundo.textContent = seconds;

    dia.textContent = day;
    mes.textContent = mount;
    ano.textContent = year;

}, 1000);
