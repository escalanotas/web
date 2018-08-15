$(function(){
  $(".accordion-titulo").click(function(e){
        e.preventDefault();
        var contenido=$(this).next();
	var p = $(this).parent().siblings().find("div");

	if(contenido.css("display")=="none"){ //open        
	  contenido.slideToggle();
	  p.slideUp();                 
        }
        else{ //close       
	  contenido.slideUp(250);
        }
      });
});