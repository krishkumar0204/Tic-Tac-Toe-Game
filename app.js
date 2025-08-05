let Boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let MsgContainer = document.querySelector(".msg-container");
let Msg = document.querySelector(".msg");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBtn();
  MsgContainer.classList.add("hide");
};

Boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBtn = () => {
  for (let box of Boxes) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (let box of Boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (Winner) => {
  Msg.innerText = `Congratulations, Winner is ${Winner}` + " 🏆";
  MsgContainer.classList.remove("hide");
  disableBtn();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = Boxes[pattern[0]].innerText;
    let pos2Val = Boxes[pattern[1]].innerText;
    let pos3Val = Boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
