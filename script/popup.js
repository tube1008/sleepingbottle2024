$('.close').on('click',function(){
        $.cookie('popup','none',{expires:1, path:'/'})
        $('.popUp').fadeOut('fast')
})

if($.cookie('popup')=='none'){
    $('.popUp').hide()
}