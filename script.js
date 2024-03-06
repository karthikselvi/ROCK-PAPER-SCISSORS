let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgContainer=document.querySelector(".msg-container");
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#com-score");

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};
const drawGame=()=>{
    msg.innerText="Game was draw , Play again";
    msgContainer.style.backgroundColor="blueviolet";

}
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win..";
        msgContainer.style.backgroundColor="green";
    }
    else{
        comScore++;
        comScorePara.innerText=comScore;
        msg.innerText="You lose..";
        msgContainer.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    //generate computer choice
    const comChoice=genComChoice();
    if(userChoice==comChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissors,paper
            userWin=comChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=comChoice==="scissors"?false:true;
        }else{
            //rock paper
            userWin=comChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})