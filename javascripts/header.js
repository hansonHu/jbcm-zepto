/**
 * Created by ESC on 2017/9/5.
 */
$(function () {
//获取元素
  var header1 = $("#header")
  var mainnav=$("#mainnav")
  var ulList = $("#ulList")

//点击事件
  var listLL=ulList.children('li').slice(1,6)
  listLL.click(function () {
    listLL.children('a').css('color','black')
  $(this).children('a').css('color','red')
})


//头部滚动事件
  $(document).ready(function () {
    $(window).scroll(function () {
      if($(window).scrollTop()>80){
        header1.fadeIn(500)
        header1.css('position',"fixed")
        mainnav.css('top',0)
        header1.addClass('headerOut')
      }else if($(window).scrollTop()<80){
        header1.css('position',"relative")
        mainnav.css('top',80)
        header1.removeClass('headerOut')
      }
    });
  });

  // $.



















})