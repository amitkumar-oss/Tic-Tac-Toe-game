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

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box is clicked")
        if (turnO == true) {
            box.innerHTML = "O";
            turnO = false
        }
        else {
            box.innerHTML = "X";
            turnO = true
        }

        box.disabled = true;

        checkWinner();
        




    });

});


const shoWinner=(winner)=>{
    msgContainer.innerHTML="Congratulations you are Winner"
    msgContainer.classList.remove("hide");
    resetBtn.innerHTML="Play Again"
    

}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pose1 = boxes[pattern[0]].innerText;
        let pose2 = boxes[pattern[1]].innerText;
        let pose3 = boxes[pattern[2]].innerText;

        if (pose1 != "" && pose2 != "" && pose3 != "") {
            if (pose1 == pose2 && pose2 == pose3) {
                console.log("winner")
                shoWinner(pose1)

            }



        };
    };
}

