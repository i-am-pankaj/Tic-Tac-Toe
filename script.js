let turn = "X";
let winningMessageTextElement = document.querySelector('[winning-message-text]');
let isDraw = false;

const changeTurn = () =>{
    return turn === "X"?"O":"X";
}

const clear = () =>{
    let text = document.querySelectorAll('.boxtext');
    Array.from(text).forEach(e => {
        e.innerText='';
    })
}

const checkWin = () =>{
    let text = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach(e =>{
        if((text[e[0]].innerText !== '') && (text[e[0]].innerText === text[e[1]].innerText) && (text[e[0]].innerText === text[e[2]].innerText)){
            winningMessageTextElement.innerText = turn + " WIN";
            document.getElementById(['winText']).style.display = "flex";
            isDraw = false;
        }
    })

    if(isDraw){
        winningMessageTextElement.innerText = "DRAW";
        document.getElementById(['winText']).style.display = "flex";
    }
}

const draw = () =>{
    let text = document.querySelectorAll('.boxtext');
    for(let i=0;i<9;i++){
        if(text[i].innerText === '')
            return false;
    }
    return true;
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(e =>{
    let text = e.querySelector('.boxtext');
    e.addEventListener('click',()=>{
        if(text.innerText === ""){
            text.innerText = turn;
            isDraw = draw();
            checkWin();
            turn = changeTurn();
        }
    })
})

reset.addEventListener('click',()=>{
    clear();
    turn = "X";
})

play.addEventListener('click',()=>{
    document.getElementById(['winText']).style.display = "none";
    clear();
    turn = "X";
})