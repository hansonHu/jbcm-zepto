/**
 * Created by ESC on 2017/9/8.
 */
$(function () {
  //获取元素
  var serviceList = $('#serviceNav span')
  var serviceMain =$("#serviceMain")//服务项目
  var shopper =$("#shopper")//商家简介
  var servicEvaluate =$("#servicEvaluate")//用户评论




 //导航条点击事件
  serviceList.click(function () {
    serviceList.removeClass('navCo')
    $(this).addClass('navCo')
    if($(this).index()==0){
      $(window).scrollTop(serviceList.offset().top-100)
      console.log(serviceList.offset().top)
    }else if($(this).index()==1){
      $(window).scrollTop(shopper.offset().top-100)
      console.log(shopper.offset().top)
    }else if($(this).index()==2){
      $(window).scrollTop(servicEvaluate.offset().top-100)
      console.log(servicEvaluate.offset().top)
    }
  })





})