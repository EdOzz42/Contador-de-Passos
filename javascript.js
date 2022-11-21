let button = document.querySelector('#buttonExec')
button.addEventListener('click', executar)


function executar() {
    //window.alert('Hello, world!')
    let iniNumSelec = document.querySelector('#quantInicial')
    let fimNumSelec = document.querySelector('#quantFinal')
    let tamanhoPassoSelec = document.querySelector('#quantPassos')
    let paragraph = document.querySelector('#resPassos')

    let i = Number(iniNumSelec.value)
    let f = Number(fimNumSelec.value)
    let p = Number(tamanhoPassoSelec.value)
    let numAparicoesC = 0

    for (let c =  i ; c <= f ; c += p) {
        let txt = document.createTextNode(` ->${c}`)
        paragraph.appendChild(txt)
    }

    let txt = document.createTextNode(` -> Fim`)
    paragraph.appendChild(txt)
}