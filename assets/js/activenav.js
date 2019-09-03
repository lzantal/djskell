$(function(){
    var url = window.location;
    $('.navbar-nav a').each(function(){ 
        if(url.pathname === $(this).attr('href')){ 
            $(this).parent().addClass('active'); 
        }   
    });
});
