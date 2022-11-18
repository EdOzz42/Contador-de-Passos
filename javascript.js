let botao0 = document.querySelector('#buttonExec')
botao0.addEventListener('click', executar)
let botao1 = document.querySelector('#buttonDel')
botao1.addEventListener('click', del)

/*function executar() {
    var input = document.querySelector('#inpNume')
    let body = document.querySelector('body')
    let p = document.createElement('p')
    let n1 = input1 = String(input1.value)
    let txt = document.createTextNode(`Bla Bla 
    Bla ${n1}`)
    
    p.appendChild(txt)
    body.appendChild(p)
}
*/

function executar(){
    let input = document.querySelector('#inpNume')
    let contadorUser = Number(input.value)
    let contadorAdd = 0
    let section = document.createElement('section')
    section.setAttribute('id', 'sctn')

    while (contadorAdd < contadorUser) {
        contadorAdd++
        let main = document.querySelector('main')
        let paragraph = document.createElement('p')
        let content = document.createTextNode(`#${contadorAdd}`)
        main.appendChild(section)
        section.appendChild(paragraph)
        paragraph.appendChild(content)
    }
}

function del() {
    document.querySelector('#sctn').remove()
}
