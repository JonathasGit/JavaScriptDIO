

//Validar a idade 
var idade = prompt ("Qual a sua idade ");
//var idade = 18;
if (idade >= 18){ // Se idade maior ou igual a 
    alert("Maior de idade"); 
}else{
        alert("Menor de idade");
    };
    

    // Estrutura de repetição While
   var count = 0;
   while (count <= 5){
       console.log(count);
       alert(count); // Exibir na tela a contagem.
       count++
   }

   // Estrutura de repetição for
   var count1;
   for(count1=0; count1 <=10; count1++){
       alert(count1);
   };

   //Data atual em JS
   var d = new Date(); //Puxa a data toda.
   alert(d.getMinutes());
   alert(d.getHours());
   alert(d.getDay());

