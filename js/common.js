//한 페이지씩 스크롤
$(document).ready(function() {
  //한 페이지당 높이가 크기가 일정 할 때
  var sc_pg = parseInt($(window).height());
  $(window).on("mousewheel", function(e) {
    if (e.originalEvent.wheelDelta < 0) {
      $("html, body")
        .not(":animated")
        .animate(
          {
            scrollTop: "+=" + sc_pg + "px"
          },
          800
        );
    } else {
      $("html, body")
        .not(":animated")
        .animate(
          {
            scrollTop: "-=" + sc_pg + "px"
          },
          800
        );
    }
    return false;
  });
});
