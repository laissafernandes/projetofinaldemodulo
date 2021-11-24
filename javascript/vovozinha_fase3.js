function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 3!')
    var decide = prompt('Ela já está agoniada e então pensa:\n  1- Vou gritar para alguém vir me socorrer.\n  2- Vou sair do armário, bem quietinha.');
    
       
    if(decide == 1){
        var decide = alert('O Lobo Mau descobre aonde ela está e a devora.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('Quando ela sai, ela vê o Lobo Mau, mas antes de entrar em desespero, sua netinha chega e esfaqueia o Lobo Mau. E vocês ficam sãs e salvas.')
        return location = '../html/venceu.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha();
