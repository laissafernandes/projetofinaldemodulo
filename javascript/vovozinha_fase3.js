function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 3!')
    var decide = prompt('Ela já está agoniada e então pensa:\n  1- Grito para alguém vir me socorrer.\n  2- Saio do armário sem fazer nenhum barulho.');
    while(decide != 1 && decide!=2){
        alert('opção invalida')
        decide = prompt ('Escolha entre 1 e 2')
    }
       
    if(decide == 1){
        var decide = alert('O Lobo Mau descobre aonde ela está e a devora.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('Quando ela sai do armário. Ela vê o Lobo Mau, mas antes de entrar em desespero, a sua netinha chega e esfaqueia o Lobo Mau. E vocês ficam sãs e salvas.')
        return location = '../html/venceu.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha();
