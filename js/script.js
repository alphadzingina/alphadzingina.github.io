jQuery(document).ready(function($) {

    $(".page-scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });


   
    	// cache container
    	var $container = $('.portfolio-items');

    	// initialize isotope
    	$container.isotope({
    		// options...
    		animationEngine: 'best-available',
    		itemSelector: '.portfolio-item'
    	});

    	// filter items when filter link is clicked
    	$('.portfolio-filter li button').on('click', function() {
    		var selector = $(this).data('filter');
    		$container.isotope({
    			filter: selector
    		});
		}); 



    

});