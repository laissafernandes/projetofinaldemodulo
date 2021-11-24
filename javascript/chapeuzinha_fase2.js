function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 2!')
    var decide = prompt('Mas, em um determinado momento ela se depara com uma arvore linda e explendorosa e ai ela pensa: \n 1 - Continuo caminhando, pois a Vovó está me esperando. \n 2- Vou me sentar um pouco abaixo da árvore para descansar.')
    
       
    if(decide == 1){
        var decide = alert('Chapeuzinho está muito cansada, mas já está perto da casa de sua Vovó. Ela continua a caminhar, pois já está escurecendo e ela quer encontrar a Vovó acordada.')
        return location = '../html/chapeuzinha_fase3.html'
    } else if(decide == 2){
        var decide = alert('Chapeuzinho acabou caindo no sono sentada na Árvore, o Lobo a viu e a devorou!')
        return location = './html/gameover.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha ();
