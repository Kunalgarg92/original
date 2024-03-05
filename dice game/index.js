var randomvariable1 = Math.floor(Math.random() * 6) + 1;
var randomvariable2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src","C:/Users/kunal/OneDrive/Desktop/web dev/dice game/images/dice"+randomvariable1+".png");
    document.querySelector(".img2").setAttribute("src","C:/Users/kunal/OneDrive/Desktop/web dev/dice game/images/dice"+randomvariable2+".png");
    if (randomvariable1>randomvariable2){
        document.querySelector("h1").innerHTML="player 1 Wins ! ";
    }
    else if (randomvariable2 > randomvariable1){
        document.querySelector("h1").innerHTML="player 2 Wins !";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }