function escolha (){
    setTimeout(() => {
        alert('Bem vindo a fase 1!')
        var decide = prompt('O lobo mau está na floresta para caçar algo para comer. Até que sua barriga começa a roncar e ele de longe vê uma fofa senhora (dona vovozinha) caminhando pela floresta. O que você faz:  \n 1 - Ataca a vovozinha para devorá-la e saciar a sua fome.  \n 2 - Caminha calmamente até ela e puxa um diálogo doce para iludibriá-la')
        
        
        if(decide == 1){
        var decide = alert('A vovozinha tinha uma faca em sua bolsa e te esfaqueou. Se deu mau, Lobo Mau.')
        return location = '../html/gameover.html'
    } else if(decide == 2){
        var decide = alert('Você continua a caminhar na floresta com a Vovozinha.')
        return location = '../html/lobomau_fase2.html'
    } else {
        alert('Opção Inválida')
        return escolha();
    }
    
}, 1000);
}
escolha ();

