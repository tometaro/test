$(function(){
  //スクロールヘッダー
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.Header').addClass('Header__Bg');
    } else {
      $('.Header').removeClass('Header__Bg');
    }
  });

  //ハンバーガーメニュー
  $('.Navi__Toggle').on("click", function() {
    $('.Header').toggleClass('Navi__Open');
    return false;
  });

  //ナビゲーション外タッチで閉じる
  $(".Navi__Shadow").click(function() {
    $('.Header').removeClass('Navi__Open');
    return false;
  });

  //タブ
  $('.Tab__Btn').on('click',function(){
    var index = $('.Tab__Btn').index(this);
    $('.Tab__Inner').css('display','none');
    $('.Tab__Inner').eq(index).css('display','block');
    $('.Tab__Btn').removeClass('Tab__Btn--Active');
    $(this).addClass('Tab__Btn--Active');
  });

  //アコーディオン
  $(".Accordion dt").on("click", function() {
    $(this).next().slideToggle();
  });

});