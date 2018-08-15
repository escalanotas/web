$('.accordion-container').on('click', '.accordion-titulo', function(e){
        e.preventDefault();
        var t = $(this);
        var tp = t.next();
    	var p = t.parent().siblings().find('div');
        tp.slideToggle();
	p.slideUp();
     
});