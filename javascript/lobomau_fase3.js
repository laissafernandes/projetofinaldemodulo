function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 3!')
    var decide = prompt('Vocês chegam à casa da Vovozinha, e você pensa: \n 1 - Empurro ela na porta da casa e ataco. \n 2 - Peço para ir ao banheiro, e quando sai ataco ela pelas costas.');
    while(decide != 1 && decide!=2){
        alert('opção invalida')
        decide = prompt ('Escolha entre 1 e 2')
    }
       
    if(decide == 1){
        var decide = alert('A vovozinha se assuta e começa a gritar e te bater. Até que os vizinhos te matam com uma arma.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('A Vovozinha estava preparando um chá quientinho para servir a você, mas você tranca a casa, ataca ela e a devora.')
        return location = '../html/venceu.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha();
