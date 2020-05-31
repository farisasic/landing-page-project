$(document).ready(function(){$(".choices").hide();});

$('#xplr').click(function() {

    $('#dropdown').slideToggle();
    
    $('#subc').hide();
    
    $(this).children('#subc').show();
    
    $('#sub1').click(function(){
        $('#subc').toggle();
    });

    
    $('#subc2').hide();

    $(this).children('#subc2').show();
    
    $('#sub2').click(function(){
            $('#subc2').toggle();
    });

});

$('.sub-choices > a').click(function(){
    if($(this).hasClass('is-open')){
        $(this).removeClass('is-open');
        $(this).blur();
    }else{
        $(this).addClass('is-open');
    }
})
