jQuery(document).ready(function($) {

    $(".page-scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });


    //isotope initialisation
    $('.portfolio-items').isotope({
  		// options
  		itemSelector: '.grid-item',
  		layoutMode: 'fitRows'
	});


    

});