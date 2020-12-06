/* global $*/
/* global tm
$*/
var a = 0;
var time = null;



$(function() {
     // スタートボタン
     $("#start").click(function() {
         time = setInterval("countUp()",100); 
     });
     // ストップボタン
     $("#stop").click(function() {
          clearInterval(time); 
          
     });
     // リセットボタン
     $("#reset").click(function() {
          $("#timer").text("00:00:0");
          a=0;
     });
});

function countUp() {
     a += 1;
     var ms = a % 10;
     var s = Math.floor(a / 10) % 60;
     var m = Math.floor(a / 600) % 60;
     

     
     $("#timer").text(('0' + m).slice(-2) + ":" + ('0' + s).slice(-2) + ":" + ms);
}