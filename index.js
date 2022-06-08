var n1 = Math.random()*6;
n1 = Math.floor(n1)+1;

var n2 = Math.random()*6;
n2 = Math.floor(n2)+1;

document.querySelector(".img1").src = "images/"+n1+".png";
document.querySelector(".img2").src = "images/"+n2+".png";

if(n1==n2){
    document.querySelector(".winner").innerHTML = "Its a drawwww 🥱";
}
else if(n1<n2){
    document.querySelector(".winner").innerHTML = "Player 2 wins 🎉🎉";
}
else{
    document.querySelector(".winner").innerHTML = "Player 1 wins 🎉🎉";
}

