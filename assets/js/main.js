/**
 * Created by hp on 10/22/2016.
 */

$(window).scroll(function(){
            var y =$(this).scrollTop();
            if(y>=45)   {
                $('#nava').addClass('navb');
                 }
             else{
                $('#nava').removeClass('navb');
            }
    })



$(function(){
    /*this is is what happens when the button is fired*/
    $('#btn-click').click(function(){
        /*the display-modal class is removed*/
        $('#play-modal').removeClass('play-modal');
        /*the display-modal-preview is added class is added*/
        $('#play-modal').addClass('display-modal-preview animated fadeIn');

    })
})

$(function(){
    /*the span X in the body is clicked here*/
    $('.modal-close').click(function(){
        /*the display-modal-7 class is removed*/
        $('#play-modal').removeClass('display-modal-preview');
        /*the display-modal class is added*/
        $('#play-modal').addClass('play-modal animated fadeOut');

        /*paparazi*/
        $('#play-modal').removeClass('animated fadeOut');
    })

})

//login-form
$(function(){
    $('#login-click').click(function(){
       
        $('#play-modal').addClass('play-modal');
        
        $('#login-modal').removeClass('play-modal');
        
        
        $('#login-modal').addClass('display-modal-preview animated fadeIn');
    })
})

$(function(){
    /*the span X in the body is clicked here*/
    $('.modal-close').click(function(){
        /*the display-modal-7 class is removed*/
        $('#login-modal').removeClass('display-modal-preview');
        /*the display-modal class is added*/
        $('#login-modal').addClass('play-modal animated fadeOut');

        /*paparazi*/
        $('#login-modal').removeClass('animated fadeOut');
    })

})

//form upload

$(function(){
    
    $('#new-upload').click(function(){
        
        $('#new').hide();
        $('#form').show();
        
    })
       
})


//show-preview

$(function(){
    $('#preview').click(function(){
        
        $('#form').hide();
        $('#pre').show();
        
    })
})


$(function(){
    $('#edit').click(function(){
        $('#pre').hide();
        $('#form').show();
    })
})

