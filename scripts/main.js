$(function () {
  $(window).width() < 992 || ($(".tagline").addClass("typing"), setTimeout(function () {
    function display(t, show_len, u) {
      show_len < t.length ? (tagline.show().html(t.substring(0, show_len + 1)), setTimeout(function () {
        display(t, show_len + 1, u)
      }, 100)) : typeof u == "function" && setTimeout(u, 2e3)
    }

    function remove(showd_len, i) {
      showd_len > 0 ? (tagline.html(tagline.html().substring(0, showd_len - 1)), setTimeout(function () {
        remove(showd_len - 1, i)
      }, 100)) : typeof i == "function" && setTimeout(i, 100)
    }

    function init(f) {
      remove(tagline.html().length, function () {
        display(t_array[f], 0, function () {
          init((f + 1) % t_array.length)
        })
      })
    }
    var t_array = ['噢噢噢噢噢噢噢噢哦', '啊啊啊啊啊啊啊啊'], 
      tagline = $(".tagline")
    init(0) 
  }, 3e3))

  function piano(){
    var rects = $(".polygons").children();
    var rects_list = rects; 
      setTimeout(function(){
        $(rects_list[0]).addClass('margin-left-auto') 
        setTimeout(function(){
          $(rects_list[0]).removeClass('margin-left-auto')
          
        },3e3) 
      },3e3) 
  }
  setTimeout(function(){piano()},3e3)
});