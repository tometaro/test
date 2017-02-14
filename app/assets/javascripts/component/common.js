$(function(){
 //  背景色
 //  $('.section:odd').css('background-color','#eee');

  $('.selector1,.selector2,.selector3').on('click', function(event){
    event.preventDefault();
  });

    // 左タブをクリック
  $('.selector1').click(function() {
    $('#container1').css({'display' : 'block'});
    $('#container2').css({'display' : 'none'});
    $('#container3').css({'display' : 'none'});
  });

  // 右タブをクリック
  $('.selector2').click(function() {
    $('#container1').css({'display' : 'none'});
    $('#container2').css({'display' : 'block'});
    $('#container3').css({'display' : 'none'});
  });

 // 右タブをクリック
  $('.selector3').click(function() {
    $('#container1').css({'display' : 'none'});
    $('#container2').css({'display' : 'none'});
    $('#container3').css({'display' : 'block'});
  });

  //
  $(".accordion dt").on("click", function() {
    $(this).next().slideToggle();
  });

});