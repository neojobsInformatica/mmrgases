/*---ANIMAÇÕES INICIAIS---*/
let marquee = document.querySelector('.empresa')
let menu = document.querySelector('.menu')
let logo = document.querySelector('.logo')
let gases = document.querySelector('.gases')
let fraseBotao = document.querySelector('.frases')
/*---LOGO PRINCIPAL-MENU-MARQUEE---*/
setTimeout(() => {
    logo.style.transition = 'all 1s ease-in-out';
    logo.style.opacity = '1';
    marquee.style.transition = 'all 1s ease-in-out';
    marquee.style.opacity = '1';
    menu.style.transition = 'all 1s ease-in-out';
    menu.style.opacity = '1';
}, 1000);
/*---IMG "GASES"---*/
setTimeout(() => {
    gases.style.transition = 'all 0.8s ease-in-out'
    gases.style.transform = 'translateX(0)'
    gases.style.opacity = '1'
}, 1500);

/*---FRASES---*/
setTimeout(() => {
    fraseBotao.style.transition = 'all 1.5s ease-in-out'
    fraseBotao.style.transform = 'translateY(0)'
    fraseBotao.style.opacity = '1'
}, 2000);
/*---CAMINHÃO---*/
let cor = document.querySelector('#super')
let fonte = document.querySelector('#supor')
setTimeout(() => {
    cor.style.backgroundImage = 'linear-gradient(to left, rgb(8, 143, 51), transparent)'
    cor.style.transition = 'all 1s ease-in-out'
    fonte.style.color = 'rgb(174, 255, 0)'
    fonte.style.transition = 'all 1s ease-in-out'
}, 4000);


/*ABERTURA E FECHADURA DO SOBRE*/
let abrirSobre = document.querySelector('#abrir-sobre')
let abrirSobreOne = document.querySelector('#abrir-sobre-one')
let abrirSobreTwo = document.querySelector('#abrir-sobre-two')
let containerSobre = document.querySelector('#sobre-nos')
let fecharSobre = document.querySelector('#fechar-sobre')

abrirSobreOne.addEventListener('click', AbrirModal)
abrirSobreTwo.addEventListener('click', AbrirModal)
abrirSobre.addEventListener('click', AbrirModal)
function AbrirModal(){
    containerSobre.style.zIndex = '+2'
    containerSobre.style.opacity = '1'
    containerSobre.style.transition = 'all 1s ease-in-out'
}

fecharSobre.addEventListener('click', FecharModal)
function FecharModal(){
    containerSobre.style.zIndex = '-1'
    containerSobre.style.opacity = '-1'
    containerSobre.style.transition = 'all 1s ease-in-out'
}
/*-------------------------------------------------------*/
/*ABERTURA E FECHADURA DO MENU PARA DISPOSITIVOS MENORES*/
function openModal(){
    const modal = document.querySelector('.menu-tel');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'menu-tel'|| e.target.id === 'fechar-menu'){
            modal.classList.remove('abrir')
        }
    })
}
/*-------------------------------------------------------*/

/*FORMULÁRIO*/
let botao = document.querySelector('#botao')
botao.addEventListener('click', mensagem)
function mensagem() {
    let nome = document.querySelector('.nome').value
    let tel = document.querySelector('.numero').value
    let email = document.querySelector('.email').value
    let msg = document.querySelector('.mensagem').value

    if(nome === ''){
        alert('Digite seu nome!')
        preventDefault()
    }
    else if(tel === ''){
        alert('Digite o numero do seu telefone!')
        preventDefault()
    }
    else if(email === ''){
        alert('Digite seu email!')
        preventDefault()
    }
    else if(msg === ''){
        alert('Digite uma mensagem para enviar para a empresa!')
        preventDefault()
    }
}
/*-------------------------------------------------------*/

//SEÇÕES
let feed1 = document.querySelector('.feedback-1')
let feed2 = document.querySelector('.feedback-2')
let feed3 = document.querySelector('.feedback-3')
let feed4 = document.querySelector('.feedback-4')
let feed5 = document.querySelector('.feedback-5')
//BOTÕES
let bt1 = document.querySelector('.bt1')
let bt2 = document.querySelector('.bt2')
let bt3 = document.querySelector('.bt3')
let bt4 = document.querySelector('.bt4')
let bt5 = document.querySelector('.bt5')
//EVENTOS
bt1.addEventListener('click', uTroca)
bt2.addEventListener('click', dTroca)
bt3.addEventListener('click', tTroca)
bt4.addEventListener('click', qTroca)
bt5.addEventListener('click', cTroca)

//TROCAS
function uTroca(){
    feed1.style.display = 'flex'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(170, 203, 99)'
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function dTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'flex'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(170, 203, 99)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function tTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'flex'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(170, 203, 99)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function qTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'flex'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(170, 203, 99)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function cTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'flex'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(170, 203, 99)'
}

//-- PASSAGEM AUTOMATICAS
setInterval(() => {
    setTimeout(() => {
        feed1.style.display = 'flex'
        feed2.style.display = 'none'
        feed3.style.display = 'none'
        feed4.style.display = 'none'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(170, 203, 99)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 1000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'flex'
        feed3.style.display = 'none'
        feed4.style.display = 'none'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(170, 203, 99)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 6000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'none'
        feed3.style.display = 'flex'
        feed4.style.display = 'none'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(170, 203, 99)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 11000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'none'
        feed3.style.display = 'none'
        feed4.style.display = 'flex'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(170, 203, 99)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 16000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'none'
        feed3.style.display = 'none'
        feed4.style.display = 'none'
        feed5.style.display = 'flex'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(170, 203, 99)'
    }, 20000);
}, 25000);