var botao = document.querySelector('#buttonExec')
var input1 = document.querySelector('#inpNume')
botao.addEventListener('click', executar)


function executar() {
    let body = document.querySelector('body')
    let p = document.createElement('p')
    let n1 = input1 = String(input1.value)
    let txt = document.createTextNode(`Bla Bla 
    Bla ${n1}`)
    
    
    p.appendChild(txt)
    body.appendChild(p)
}
