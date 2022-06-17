$(function () {
  $('.inner-cell').on('click', function (){
    $(this).toggleClass('test');
    // $(this).html = "Hello";
    console.log(this);
  }); 
});