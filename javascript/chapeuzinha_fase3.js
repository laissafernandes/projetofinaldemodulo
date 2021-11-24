function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 3!')
    var decide = prompt('Então ela pensa: \n 1-Ela entra e vê o que está acontecendo.\n 2- Ela olha para dentro da casa da Vovó do lado de fora pela janela.');
    
       
    if(decide == 1){
        var decide = alert('Ela vê o Lobo Mau prestes a devorar a Vovó. E com uma faca que encontra-se na mesa mata o Lobo Mau e salva a sua Vovó.')
        return location = '../html/venceu.html'
    } else if(decide == 2){
        var decide = alert('O Lobo Mau estava do lado de fora e quando vê Chapeuzinho espiando ele a devora e depois entra e devora sua Avó. ')
        return location = '../html/gameover.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha();
