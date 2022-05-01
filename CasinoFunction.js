

function play() {
    var die1 = Math.ceil(Math.random() * 11);
    var die2 = Math.ceil(Math.random() * 11);
    //Two differents die's: Die 1 & Die 2, Randomly generate
    var sum = die1 + die2;
    //I am wanting the user to roll the dice, when the dice is rolled I am wanting them to roll dice between 0 and 10
    //The var sum is what adds the two dice rolls together

        document.getElementById("Die1Res").innerHTML = "die1 =" +die1;
        document.getElementById("Die2Res").innerHTML = "die2 =" +die2;
        document.getElementById("sumRes").innerHTML = "sum =" +sum;

    if (sum==1||sum==3||sum==5||sum==7||sum==9||sum==11||sum==13||sum==15||sum==17||sum==19||sum==21){
        //I have to set my losing parameters
            document.getElementById("finalRes").innerHTML = "Awe Try Again!"
    }
    //If a user rolls two dices that equals an ODD number, you lose the game
    else if (sum==2||sum==4||sum==6||sum==8||sum==10||sum==12||sum==14||sum==16||sum==18||sum==20||sum==22){
        //I have to set my winning parameters
        document.getElementById("finalRes").innerHTML = "Congrats You Win!"
    }
    //If a user rolls two dices that equal an EVEN number, You win the game
}