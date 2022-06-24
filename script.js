// const cards = [...document.querySelectorAll(".card--front")];
// // cards.splice(1, 1);

// let moves = 0;
// let first;
// let second;
// cards.forEach((card) =>
//   card.addEventListener("click", (e) => {
//     e.target.style.transform = `rotateY(180deg)`;
//     e.target.style.backfaceVisibility = "hidden";
//     e.target.nextElementSibling.style.transform = "rotateY(0)";
//     moves++;
//     if (moves > 2) {
//       cards.forEach((card) => {
//         card.style.transform = " rotateY(0)";
//         card.nextElementSibling.style.transform = `rotateY(180deg)`;
//         // console.log(moves);
//       });
//       moves = 0;
//     }
//     if (moves == 1) {
//       first = card.nextElementSibling.textContent;
//     } else {
//       second = card.nextElementSibling.textContent;
//     }
//     // console.log(first, second);
//     if (first == second) console.log("bingo");
//   })
// );

import { Card } from "./card.js";

class Game {
  htmlElement = {
    levelButtons: document.querySelectorAll(".chose-level__button"),
    board: document.querySelector(".board"),
  };
  card = new Card();

  #level;
  constructor() {
    this.htmlElement.levelButtons.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.choseLevel(e);
        this.generateBoard();
      });
    });
    this.htmlElement.board.addEventListener("click", (e) => {
      this.card.init();

      this.card.open(e);
    });
  }
  choseLevel(e) {
    this.htmlElement.board.textContent = "";
    this.#level = e.target.dataset.rownum;
  }
  generateBoard() {
    this.htmlElement.board.style.gridTemplateColumns = `repeat(${
      this.#level
    }, 1fr)`;
    this.htmlElement.board.style.gridTemplateRows = `repeat(${
      this.#level
    }, 1fr)`;

    for (let i = 1; i <= this.#level * this.#level; i++) {
      let fieldHtml = `<div class="board__field field field-${i}" data-index="${i}">
        <div class="field__card card--front">${i}</div>
        <div class="field__card card--back">${Math.floor(
          Math.random() * 5 + 1
        )}</div>
      </div>`;
      this.htmlElement.board.insertAdjacentHTML("beforeend", fieldHtml);
    }
  }
}

const game = new Game();
