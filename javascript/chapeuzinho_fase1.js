function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 1!')
    var decide = prompt('Qual caminho seguir: \n 1 - Lado A (florido e rápido). \n 2 - Lado B (Pedregulho e espinhoso, mais longo);')
    while(decide != 1 && decide!=2){
        alert('opção invalida')
        decide = prompt ('Escolha entre 1 e 2')
    }    
        
    if(decide == 1){
        var decide = alert('Era uma emboscada do Lobo Mau que esperava uma presa para devorar.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('Era o caminho mais longo, mas o caminho que o Lobo Mau não gostava de ir.')
        return location = '../html/chapeuzinha_fase2.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
    
}, 1000);
}
escolha ();
