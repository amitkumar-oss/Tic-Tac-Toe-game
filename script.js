let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let msgContainer=document.querySelector('.msg-container');



const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnO = true;

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO == true) {
            box.innerHTML = "O";
            box.style.color="rgb(39, 37, 187)";
            turnO = false
        }
        else {
            box.innerHTML = "X";
            box.style.color="rgb(209, 33, 33)";
            turnO = true
        }

        box.disabled = true;

        checkWinner();
        




    });

});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const shoWinner=(winner)=>{
    msgContainer.innerHTML=`Congratulations, winner is ${winner}`;
    // resetBtn.innerHTML="New Game"
    msgContainer.classList.remove("hide");
    disableBoxes()
    
    

}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pose1 = boxes[pattern[0]].innerText;      //posision 1
        let pose2 = boxes[pattern[1]].innerText;      //posision 2
        let pose3 = boxes[pattern[2]].innerText;      //posision 3 

        if (pose1 != "" && pose2 != "" && pose3 != "") {
            if (pose1 == pose2 && pose2 == pose3) {
                shoWinner(pose1)
                

            }



        };
    };
}

resetBtn.addEventListener('click',resetGame);

