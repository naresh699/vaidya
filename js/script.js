const hamburger =  $('.js-hamburger'),
    navigation = $('.js-navigation'),
    overlay =   $('.overlay');

hamburger.on('click', ()=>{
    navigation.toggle();
    overlay.toggle();
})