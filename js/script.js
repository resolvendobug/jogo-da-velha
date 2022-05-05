const selecBox = document.querySelector(".select-box"),
selectXBtn = selecBox.querySelector(".playerX"),
selectOBtn = selecBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

window.onload = ()=> {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick","clickedBox(this)");
        
    }

    selectXBtn.onclick = ()=>{
        selecBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectOBtn.onclick = ()=>{
        selecBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class","players active player");
    }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickedBox(element){
    if(players.classList.contains("player")){
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
    }
    element.style.pointerEvents = "none";
    bot();
}

function bot(){
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount == 0){
            array.push(i);
        }
        
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if(array.length > 0){
        if(players.classList.contains("player")){
            allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
            players.classList.add("active");
        }else{
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
            players.classList.add("active");
        }  
    }
}

//https://www.youtube.com/watch?v=sNO5awLw9h0&list=WL&index=89&t=463s
// 26:56
//https://www.codingnepalweb.com/tic-tac-toe-game-javascript/