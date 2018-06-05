$(function(){
    var url = window.location;
    $('.nav a').each(function(){ 
        if(url.pathname === $(this).attr('href')){ 
            $(this).parent().addClass('active'); 
        }   
    });
});
