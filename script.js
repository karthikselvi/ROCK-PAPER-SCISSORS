let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const computer=document.querySelectorAll(".computer");
const msg=document.querySelector("#msg");
const msgContainer=document.querySelector(".msg-container");
const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#com-score");

const genComChoice=()=>{
    const options=["&#127761;","&#128220;","&#9986;"];
    const ranIdx=Math.floor(Math.random()*3);
    return computer.innerText=options[ranIdx];
    options[ranIdx].style.backgroundColor="red";
    // if(ranIdx==options[0]){
    //    return computer.innerText="&#127761;";
    // }
    // else if(ranIdx==options[1])
    // {
    //    return computer.innerText="&#128220;";
    // }
    // else{
    //     return computer.innerText="&#9986;";
    // }
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
        if(userChoice=="&#127761;"){
            //scissors,paper
            userWin=comChoice==="&#128220;"?false:true;
        }
        else if(userChoice==="&#128220;"){
            userWin=comChoice==="&#9986;"?false:true;
        }else{
            //rock paper
            userWin=comChoice=="&#127761;"?false:true;
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