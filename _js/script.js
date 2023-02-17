// const btn_menu = document.querySelector('#toggle-menu')
// const menu_div = document.querySelector('.header--menu-div')
// btn_menu.addEventListener('click', ()=> {
//     menu_div.classList.toggle('toggle-menu')
// })


window.addEventListener('scroll', amostragem)
function amostragem() {
    const conteudo = document.querySelectorAll('#trajeto-anime')
    for (let i = 0; i < conteudo.length; i++) {
        let topoElemento = conteudo[i].getBoundingClientRect().top       
        let rolamento = 50
        let pagina = window.innerHeight

        if(topoElemento < pagina - rolamento) {
            conteudo[i].classList.add('esmaecer')
        } else {
            conteudo[i].classList.remove('esmaecer')
        }
    }
}

const proximo = document.querySelectorAll('.header-menu-list-link')
const secao = document.querySelectorAll('.conteudo-camada')
const secao_botao = document.querySelectorAll('.next-slide-btn')
const fundo = document.querySelector('.fixed-fundo')
console.log(proximo)
proximo[0].addEventListener('click', (e)=> {
    secao[0].classList.remove('secao-off'); secao[0].classList.add('secao-on');
    secao[1].classList.remove('secao-on');secao[2].classList.remove('secao-on')
    secao[1].classList.add('secao-off');secao[2].classList.add('secao-off')
    fundo.classList.add('fundo-primeiro'); fundo.classList.remove('fundo-segundo', 'fundo-terceiro')
})
proximo[1].addEventListener('click', (e)=> {
    secao[1].classList.remove('secao-off'); secao[1].classList.add('secao-on')
    secao[0].classList.remove('secao-on'); secao[2].classList.remove('secao-on')
    secao[0].classList.add('secao-off'); secao[2].classList.add('secao-off')
    fundo.classList.add('fundo-segundo'); fundo.classList.remove('fundo-primeiro', 'fundo-terceiro')
})
proximo[2].addEventListener('click', (e)=>{
    secao[2].classList.remove('secao-off'); secao[2].classList.add('secao-on')
    secao[0].classList.remove('secao-on'); secao[1].classList.remove('secao-on')
    secao[0].classList.add('secao-off'); secao[1].classList.add('secao-off')
    fundo.classList.add('fundo-terceiro'); fundo.classList.remove('fundo-primeiro', 'fundo-segundo')
})


secao_botao[0].addEventListener('click', (e)=> {
    secao[1].classList.remove('secao-off'); secao[1].classList.add('secao-on')
    secao[0].classList.remove('secao-on'); secao[2].classList.remove('secao-on')
    secao[0].classList.add('secao-off'); secao[2].classList.add('secao-off')
    fundo.classList.add('fundo-segundo'); fundo.classList.remove('fundo-primeiro', 'fundo-terceiro')
})
secao_botao[1].addEventListener('click', (e)=> {
    secao[2].classList.remove('secao-off'); secao[2].classList.add('secao-on')
    secao[0].classList.remove('secao-on'); secao[1].classList.remove('secao-on')
    secao[0].classList.add('secao-off'); secao[1].classList.add('secao-off')
    fundo.classList.add('fundo-terceiro'); fundo.classList.remove('fundo-primeiro', 'fundo-segundo')
})
secao_botao[2].addEventListener('click', (e)=>{
    secao[0].classList.remove('secao-off'); secao[0].classList.add('secao-on');
    secao[1].classList.remove('secao-on');secao[2].classList.remove('secao-on')
    secao[1].classList.add('secao-off');secao[2].classList.add('secao-off')
    fundo.classList.add('fundo-primeiro'); fundo.classList.remove('fundo-segundo', 'fundo-terceiro')
})

const progresso_caixa = document.querySelector('.site-progresso')
const progresso_cont = document.querySelector('.site-progresso-container')
function close_msg() {
    // progresso_caixa.style.display="none"
    progresso_caixa.classList.remove('open-pgr');
    progresso_cont.classList.remove('open-pgr');
}
function open_msg() {
    progresso_caixa.style.display="flex"
    progresso_caixa.classList.add('open-pgr');
    progresso_cont.classList.add('open-pgr');
}