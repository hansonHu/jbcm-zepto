/**
 * Created by ESC on 2017/9/5.
 */
$(function () {
  //获取元素
  var listNode = $('#lunbotu').children('li')
  var rounderNode =$('#rounder1').children('li')
  var nav1Node=$('#nav1').children('li')
  var arrow1 =$('#arrow1')
  var main1=$('#main1')
  // console.log($(window).height()))

  var nav1List = $("#nav1 li a")

  nav1List.click(function () {
    var obj= {key:$(this).attr('key')}
  $.get(
    '/classification',
    obj,
    function (data) {
    console.log('成功了')
    }
  )
  })
 //全局变量
  var lunIndex=0
  var clickIndex=0
  var timer1




  $(this).children('ul').css('top', -$(this).index()*42)




  //nav1的逻辑

  nav1Node.mouseenter(function () {
   $(this).children('ul').css('display','block')
    $(this).children('ul').css('top', -$(this).index()*42)
    $(this).children('a').children('span').css('opacity',0)
    arrow1.css('opacity',1)
    arrow1.css('top',$(this).index()*42+16)
  })
  nav1Node.mouseleave(function () {
    $(this).children('ul').css('display','none')
    $(this).children('a').children('span').css('opacity',1)
    arrow1.css('opacity',0)
  })



  //大图淡入淡出
  // timer1()
  var fn1=function () {
    rounderNode.css('background','silver')
    lunIndex++
    if(lunIndex>2){
      lunIndex=0
    }
    $(listNode[lunIndex-1<0?2:lunIndex-1]).fadeOut(1000)
    $(listNode[lunIndex]).fadeIn(1000)
    $(rounderNode[lunIndex]).css('background','red')
  }
timer1=setInterval(fn1,3000)

//点击圆点大图淡入淡出
  rounderNode.click(function () {
    clearInterval(timer1)
    rounderNode.css('background','silver')
    $(this).css('background','red')
   clickIndex=$(this).index()
    $(listNode[lunIndex]).fadeOut(1000)
    $(listNode[clickIndex]).fadeIn(1000)
    lunIndex=clickIndex
    timer1=setInterval(fn1,3000)

  })









})