/**
 * Created by ESC on 2017/9/5.
 */
$(function () {
//全局变量
  var login = $("#login")
  var username= $("#username")
  var password=$("#password")
  var closed=$("#closed")
  var wrapL = $("#wrapL")
  var bottomI=$("#bottomI")




//点击事件
  login.click(function () {
    // alert(1)
    if(!username.val()/*||!password.val()*/){
      wrapL.removeClass('shownow')
      wrapL.addClass('hiddennow')
      bottomI.css('display','block')
    }
  });

  closed.click(function () {
    wrapL.removeClass('hiddennow')
    wrapL.addClass('shownow')
    bottomI.css('display','none')
  })




})