let buttonExecutar = document.querySelector('#buttonExec')
buttonExecutar.addEventListener('click', executar)
let buttonDelete = document.querySelector('#buttonDelete')
buttonDelete.addEventListener('click', limpar)

function limpar() {
    let paragraph = document.querySelector('#resPassos')
    let section = document.querySelector('#resultadoPassos')
    section.removeChild(paragraph)
}

function executar() {  
    //window.alert('Hello, world!')
    //Selecionar os inputs.
    let iniNumSelec = document.querySelector('#quantInicial')
    let fimNumSelec = document.querySelector('#quantFinal')
    let tamanhoPassoSelec = document.querySelector('#quantPassos')
    
    //Selecionar a section, criar uma parágrafo, atrelar esse novo parágrafo dentro da section.
    let section = document.querySelector('#resultadoPassos')
    let createParagraph = document.createElement('p')
    createParagraph.setAttribute('id', 'resPassos')
    section.append(createParagraph)

    //selecionar o novo parágrafo.
    let paragraph = document.querySelector('#resPassos')
    

    if (iniNumSelec.value.length == 0 || fimNumSelec.value.length == 0 || tamanhoPassoSelec.value.length == 0) {
        window.alert('[ERRO!] Verifique se você preencheu os dados corretamente!')
        paragraph.innerHTML += '[ERRO!] Verefique os dados novamente! <br>'
    } 
    
    else if (tamanhoPassoSelec.value <= 0) {
        window.alert('[ERRO!] Verifique se você preencheu o número de passos corretamente!')
        paragraph.innerHTML += '[ERRO!] O número de passos tem que ser maior que 0! <br>' 
    }

    else {
        // Espaços de memória que vão armazenar os valores coletados dos inputs e transformar esses dados no tipo número.
        let i = Number(iniNumSelec.value)
        let f = Number(fimNumSelec.value)
        let p = Number(tamanhoPassoSelec.value) 
        
        if (i < f)
            // looping quando i < f 
            for (let c =  i ; c <= f ; c += p) {
                paragraph.innerHTML += `${c} \u{27A1}`
            } else { 
            //lopping quando f < i 
            for (let c = i ; c >= f ; c -= p) {
            paragraph.innerHTML += `${c} \u{27A1}`
        }}
        paragraph.innerHTML += `\u{2611} <br>` 
    }    

}