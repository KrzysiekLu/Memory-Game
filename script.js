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
    cardFront: document.querySelectorAll(".card--front"),
    cardsBack: "_",
  };
  pictures = [
    "animals/pet-1.svg",
    "animals/pet-2.svg",
    "animals/pet-3.svg",
    "animals/pet-4.svg",
    "animals/pet-5.svg",
    "animals/pet-6.svg",
    "animals/pet-7.svg",
    "animals/pet-8.svg",
    "animals/pet-9.svg",
    "animals/pet-10.svg",
    "animals/pet-11.svg",
    "animals/pet-12.svg",
    "animals/pet-13.svg",
    "animals/pet-14.svg",
    "animals/pet-15.svg",
    "animals/pet-16.svg",
    "animals/pet-17.svg",
    "animals/pet-18.svg",
  ];

  card = new Card();
  #level;
  mainArray;

  constructor() {
    this.htmlElement.levelButtons.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.choseLevel(e);
        this.shufflePictures(this.pictures);
        this.generateBoard();
        this.drawPicture();
      });
    });
    this.htmlElement.board.addEventListener("click", (e) => {
      this.card.init();
      this.card.open(e);
    });
  }

  shufflePictures(array) {
    console.log(this.#level);

    const x = array.slice(0, this.#level * 2);

    x.forEach((el) => x.push(el));
    for (let i = this.htmlElement.cardsBack.length; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [x[i], x[j]] = [x[j], x[i]];
    }
    this.mainArray = x;
  }

  drawPicture() {
    for (let i = 1; i <= this.#level * this.#level - 1; i++) {
      this.htmlElement.cardsBack[i].src = this.mainArray[i];
    }
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
        <img src="" class="field__card card--back">
      )}</img>
      </div>`;
      this.htmlElement.board.insertAdjacentHTML("beforeend", fieldHtml);
    }
    this.htmlElement.cardsBack = document.querySelectorAll(".card--back");
    this.drawPicture();
  }
}

const game = new Game();

// odzielna klasa dla board
