let userSeq=[];
let gameSeq=[];
let btns=['red','green','yellow','purple'];

let started = false;
let level = 0;
let hS=0;
let h2=document.querySelector('h2');
let strBtn = document.querySelector('.start');

strBtn.addEventListener("click" , function(){
    if(started == false){
        started = true;
        levelUp();
        hS++;
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 150);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}   Highest Score : ${hS}`;

    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx) {
    // console.log(`Curr level : ${level}`);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
            if(hS < level){
                hS++;
            }
        }
    } else{
        if(hS >= level){
            h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Click on start button to restart.`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            },200);
            reSet();
        }else{
            h2.innerHTML=`Game Over! Congratulations!! now you have your <b>Highest score : ${level}</b> <br> Click on start button to restart.`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            },200);
            reSet();
        }
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reSet(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}