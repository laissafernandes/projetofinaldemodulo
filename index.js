setTimeout(() => {console.log("Faça a sua escolha")}, 1000);
escolha();
function escolha (){
    var decide = prompt('Escolha entre  \n 1 - Chapeuzinho  \n 2 - Vovozinha  \n 3 - Lobo Mau')
    
       
    if(decide == 1){
        return location = '/html/chapeuzinho.html'
    } else if(decide == 2){
        return location = 'vovozinha.html'
    } else if(decide == 3){
        return location = 'lobomau.html'
    }else {
        alert('Opção Inválida')
        return escolha();
    }

}
