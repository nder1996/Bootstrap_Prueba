
var contador = 0;
$(document).ready(function() {


    $('.search').click(function() {
      if(contador==0){
        contador = 1
        console.log('Contador : ',contador)
          $('#form_input').hide();
      }else{
        contador = 0 
         console.log('Contador : ',contador)
         $('#form_input').show();
      }
    
            
    })


     /* $('.search').click(function() {
          
               $('#form_input').show();
            
    })*/







});