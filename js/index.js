$(document).ready(function(){
	$('.nav-icon a').click(function(){
        $('nav').fadeIn(400)
    })
    $('.nav-icon-2 a').click(function(){
        $('.main-nav').fadeIn(400)
    })

    $('.cross-icon a').click(function(){
        $('nav').fadeOut(400)
    })
})