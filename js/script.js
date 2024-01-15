$(function () {
    $('.hide').click(function(){
        $('.text').hide(1000);
    })
    $('.show').click(function(){
        $('.text').show(1000);
    })
    $('.hs').click(function(){
        $('.text').toggle(1000);
    })
    $('.out').click(function(){
        $('.text').fadeOut(500);
    })
    $('.in').click(function(){
        $('.text').fadeIn(500);
    })
    $('.css').click(function(){
        $('.text').css('border','2px solid black');
        $('.text').css('margin-top','50px');
    })
    $('.add').click(function(){
        $('.text').addClass('images');
    })
    $('.rmv').click(function(){
        $('.text').removeClass('images');
    })
    $('.click').click(function(){
        $('.text').fadeOut(300)
        $('.click').html('Show');
        $('.click').addClass('in');
        $('.click').removeClass('click');     
    })
       
})