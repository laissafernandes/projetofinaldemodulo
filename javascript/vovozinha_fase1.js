function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 1!')
    var decide = prompt('Aí ela pensa: \n 1- Preparo um chá quentinho para tomar.\n 2- Começo a fazer um casaco de tricô para minha netinha.')
    while(decide != 1 && decide!=2){
        alert('opção invalida')
        decide = prompt ('Escolha entre 1 e 2')
    }    
        
    if(decide == 1){
        var decide = alert('Ela se queima gravemente ao preparar o chá e morre sozinha.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('Cantarolando, ela continua a tricotar o casaco para sua neta.')
        return location = '../html/vovozinha_fase2.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
    
}, 1000);
}
escolha ();
