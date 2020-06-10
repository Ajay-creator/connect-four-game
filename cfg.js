$(document ).ready(function(){
// We need to use jQuery for the following:
var player1 = prompt("enter your name and your color is bl")
var player1Color = "rgba(86, 151, 255,1)";

var player2 = prompt("enter your name and your color is red")
var player2Color = 'rgba(237, 45, 73,1)';

var i=5,j=5,k=5,l=5,m=5,n=5,o=5,p=1;
var color=player1Color;
var arr=[[0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]];

function checkWinHor(){
for(var c=0;c<6;c++){
   for(var d=0;d<4;d++){
       if(arr[c][d]==1&&arr[c][d+1]==1&&arr[c][d+2]==1&&arr[c][d+3]==1){
           $("h3").eq(0).text(player1+" has won the game");
           $("h3").eq(1).hide();

       }

       else if(arr[c][d]==2&&arr[c][d+1]==2&&arr[c][d+2]==2&&arr[c][d+3]==2){
           $("h3").eq(0).text(player2+" has won the game");
           $("h3").eq(1).hide();
       }
   }
}
}

function checkWinVer(){
for(var c=0;c<7;c++){
   for(var d=2;d>=0;d--){
       if(arr[d][c]==1&&arr[d+1][c]==1&&arr[d+2][c]==1&&arr[d+3][c]==1){
           $("h3").eq(0).text(player1+" has won the game");
           $("h3").eq(1).hide();

       }

       else if(arr[d][c]==2&&arr[d+1][c]==2&&arr[d+2][c]==2&&arr[d+3][c]==2){
           $("h3").eq(0).text(player2+" has won the game");
           $("h3").eq(1).hide();
       }
   }
}
}

function checkWinDia1(){
for(var sum=3;sum<9;sum++){
var value=[0,0,0,0,0,0],ind=0;
for(c=0;c<6;c++){
   for(d=0;d<7;d++){
       if(c+d==sum){
             value[ind]=arr[c][d];
             ind++;
           }
       }
   }
for(d=0;d<3;d++){
if(value[d]==2&&value[d+1]==2&&value[d+2]==2&&value[d+3]==2){
   $("h3").eq(0).text(player2+" has won the game");
           $("h3").eq(1).hide();
}
else if(value[d]==1&&value[d+1]==1&&value[d+2]==1&&value[d+3]==1){
  $("h3").eq(0).text(player1+" has won the game");
           $("h3").eq(1).hide();
}
}
}
}

function checkWinDia2(){
for(var sub=-3;sub<3;sub++){
var value=[0,0,0,0,0,0],ind=0;
for(c=0;c<6;c++){
   for(d=0;d<7;d++){
       if(c-d==sub){
             value[ind]=arr[c][d];
             ind++;
           }
       }
   }
for(d=0;d<3;d++){
if(value[d]==2&&value[d+1]==2&&value[d+2]==2&&value[d+3]==2){
   $("h3").eq(0).text(player2+" has won the game");
           $("h3").eq(1).hide();
}
else if(value[d]==1&&value[d+1]==1&&value[d+2]==1&&value[d+3]==1){
  $("h3").eq(0).text(player1+" has won the game");
           $("h3").eq(1).hide();
}
}
}
}



function colorAndTurn(p,a,b){

if(p%2!=0){
color=player1Color;
arr[a][b]=1;
$("h3").eq(1).text(player2+" :it's your turn ")
}
else{
color=player2Color;
arr[a][b]=2;
$("h3").eq(1).text(player1+" :it's your turn ")
}
}



$("h3").click(function(){
$("h3").eq(1).text(player1+" :it's your turn");
$("h1").text("Connect Four Game");
});

$(".c1").click(function(){
if(i!=-1){
colorAndTurn(p,i,0) ;
$(".c1").eq(i).css("background-color",color );

i-=1;
p+=1;
checkWinHor();
checkWinVer();
checkWinDia1();
checkWinDia2();}
});

$(".c2").click(function(){
if(j!=-1){
colorAndTurn(p,j,1);
$(".c2").eq(j).css("background-color",color );
j-=1;
p+=1;
checkWinHor();
checkWinVer ();
checkWinDia1();
checkWinDia2();}
});

$(".c3").click(function(){

if(k!=-1){
colorAndTurn (p,k,2);
$(".c3").eq(k).css("background-color",color );
k-=1;
p+=1;
checkWinHor();
checkWinVer();
checkWinDia1();
checkWinDia2();}
});

$(".c4").click(function(){

if(l!=-1){
colorAndTurn(p,l,3); $(".c4").eq(l).css("background-color",color );
l-=1;
p+=1;
checkWinHor();
checkWinVer();
checkWinDia1();
checkWinDia2();}
});

$(".c5").click(function(){

if(m!=-1){
colorAndTurn(p,m,4);$(".c5").eq(m).css("background-color",color );
m-=1;
p+=1;
checkWinHor();
checkWinVer();
checkWinDia1();
checkWinDia2();}
});

$(".c6").click(function(){
if(n!=-1){
colorAndTurn(p,n,5); $(".c6").eq(n).css("background-color",color );
n-=1;
p+=1;
checkWinHor();
checkWinVer();
checkWinDia1();
checkWinDia2();}
});

$(".c7").click(function(){
if(o!=-1){
colorAndTurn (p,o,6); $(".c7").eq(o).css("background-color",color );
o-=1;
p+=1;
checkWinHor();
checkWinVer();
checkWinDia1();
checkWinDia2();}
});

});
