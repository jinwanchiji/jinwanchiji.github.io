/**
 * Created by 81244 on 2017/7/19.
 */
setInterval(function () {
    var now=new Date();
    var end=
        new Date("2015/7/14 12:00");
    var s=parseInt((now-end)/1000);
    var y=parseInt(s/3600/24/365);
    var d=parseInt((s/3600/24)%365);
    var h=parseInt(s%(3600*24)/3600);
    var m=parseInt(s%3600/60);
    s%=60;
    document.getElementById('time_1').innerHTML="已入坑:"+y+"年"+d+"天"+h+"小时"+m+"分"+s+"秒";
},1000);

var headerBar=document.getElementById('header');
var icon_text=document.getElementsByClassName('blue');
var icon=document.getElementsByClassName('icon');
var list=document.querySelectorAll('#introduce>div>div:last-child ul>li');
 setBlue=function () {
    headerBar.style.backgroundColor='#8eb4e3';
     headerBar.style.color='#000';
     for(var i=0;i<icon_text.length;i++){
         icon_text[i].style.color='#558ed5'
     }
     for (var j=0;j<icon.length;j++){
         icon[j].style.backgroundColor='#558ed5'
     }
     for(var k=0;k<list.length;k++){
         list[k].style.color='#558ed5'
     }
};
setBlack=function () {
    headerBar.style.backgroundColor='#000';
    headerBar.style.color='#fff';
    for(var i=0;i<icon_text.length;i++){
        icon_text[i].style.color='#000'
    }
    for (var j=0;j<icon.length;j++){
        icon[j].style.backgroundColor='#000'
    }
    for(var k=0;k<list.length;k++){
        list[k].style.color='#000'
    }
};
setRed=function () {
    headerBar.style.backgroundColor='#c62f2f';
    headerBar.style.color='#000';
    for(var i=0;i<icon_text.length;i++){
        icon_text[i].style.color='#c62f2f'
    }
    for (var j=0;j<icon.length;j++){
        icon[j].style.backgroundColor='#c62f2f'
    }
    for(var k=0;k<list.length;k++){
        list[k].style.color='#c62f2f'
    }
};

var items=document.querySelectorAll('#introduce>div>div>div');
console.log(items);
            for(let i=0;i<items.length;i++){
                setTimeout(function () {
                    items[i].style.opacity = "1";
                },i*500);
            }

















