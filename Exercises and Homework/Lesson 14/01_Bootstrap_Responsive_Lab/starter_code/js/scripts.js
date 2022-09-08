$('.hamburger').on('click', function( e ){
    e.preventDefault();
    $('.navigation').toggleClass('showNav');
});