function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 3!')
    var decide = prompt('Vocês chegam à casa da Vovozinha, e você pensa: \n 1 - Empurro ela na porta da casa e ataco. \n 2 - Peço para ir ao banheiro, e quando sai ataco ela pelas costas.');
    
       
    if(decide == 1){
        var decide = alert('A vovozinha se assuta e começa a gritar, te bater. Até que os vizinhos te matam com uma arma.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('A Vovozinha estava preparando um chá quientinho para servir a você, mas você tranca a casa, ataca ela e devora.')
        return location = '../html/venceu.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha();
