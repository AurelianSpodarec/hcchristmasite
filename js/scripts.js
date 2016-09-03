$(document).ready(function(){


	//Mobile Navigation Dropdown
    $(".hamburger-menu").click(function(){
        $('.main-nav').slideToggle();
    });

    //Desktop Menu


    //LightBox
    var $overlay = $('<div id="overlay"</div>');
    var $image = $('<img>');

    $overlay.append($image);

    $('body').append($overlay);

    $('.gallery-item img').click(function(){
    	$(overlay).show();

    	var imageLoad = $(this).attr('src');
    	$image.attr('src', imageLoad);

    });


    $overlay.click(function(){
    	$overlay.hide();
    	$('#overlay .btn').hide();
    });
   
   
});