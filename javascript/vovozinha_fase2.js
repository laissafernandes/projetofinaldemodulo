function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 2!')
    var decide = prompt('Aí ela precisa decidir:\n  1- Abro a porta.\n  2- Não abro e me escondo.')
    while(decide != 1 && decide!=2){
        alert('opção invalida')
        decide = prompt ('Escolha entre 1 e 2')
    }
       
    if(decide == 1){
        var decide = alert('Quando ela abre é o Lobo Mau que a devora na porta de sua casa.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('Ela se enconde no armário de roupas.')
        return location = '../html/vovozinha_fase3.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha ();