function votar(idade){
    if (idade>=18 && idade<60){
        console.log("Você deve votar")
    
    } else if(idade >=16 && idade <18 || idade>=70){
        console.log("Você pode votar, mas não é obrigatório")
    } else{
        console.log("Você não pode votar")
    }

}
votar(18)
votar(16)
votar(14)






