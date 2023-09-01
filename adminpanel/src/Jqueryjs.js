import $ from 'jquery';
// window.jquery = window.$ = $

var JqueryCode = () =>{
    $(".toggle-button").click(function() {
      if($(this).parents('.main').hasClass('menu_open')){
        $(this).parents('.main').removeClass('menu_open');
          $(this).parents('.main').addClass('menu_close');
      }else{

        $(this).parents('.main').addClass('menu_open');
        $(this).parents('.main').removeClass('menu_close');
      }
    })

  }

  export default JqueryCode;

  