function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 2!')
    var decide = prompt('Após a conversa agradável com a Vovozinha, você pergunta: \n 1 - Se pode acompanhá-la em casa \n 2 - Se ela deseja conhecer um atalho que há na floresta para a casa dela.')
    
       
    if(decide == 1){
        var decide = alert('A vovozinha aceita a sua generosidade. E vocês caminham para a casa.')
        return location = '../html/lobomau_fase3.html'
    } else if(decide == 2){
        var decide = alert('A Vovozinha achou muito estranho essa conversa de atalho e tirou a faca da bolsa e você saiu correndo.')
        return location = '../html/gameover.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
}, 1000);
}

escolha ();

