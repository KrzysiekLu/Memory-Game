export { Card };
class Card {
  firstMove;
  secoundMove;
  moveCounter = 0;
  match;
  cardBack;
  cardFront;

  init() {
    this.cards = document.querySelectorAll(".field__card");
  }
  drawPicture() {}

  open(e) {
    if (e.target.classList.contains("card--front")) {
      this.cardFront = e.target;
      this.cardBack = e.target.nextElementSibling;
      this.checkValueMatch();
      this.cardFront.style.transform = `rotateY(180deg)`;
      this.cardFront.style.backfaceVisibility = "hidden";
      this.cardBack.style.transform = "rotateY(0)";
    }
  }
  checkValueMatch() {
    if (this.moveCounter == 2) {
      if (this.moveCounter == 0) {
        this.firstMove = this.cardBack.textContent;
        this.moveCounter++;
      } else {
        this.secoundMove = this.cardBack.textContent;
        this.moveCounter++;
      }
    } else if (this.moveCounter > 1 && this.firstMove !== this.secoundMove) {
      this.moveCounter = 0;
      this.firstMove = "";
      this.secoundMove = "";
      this.cards.forEach((card) => {
        card.style.transform = "rotateY(0)";
        card.style.backfaceVisibility = "visible";
        card.nextElementSibling.style.transform = "rotate(-180deg)";
      });
    }

    if (this.firstMove == this.secoundMove) {
      this.match = true;
    }
  }
}
// Wypchnij ruchy do tablicy
// Jesli ruchy nie pasuja zamknij wszystkie
//Jesli pasuja usuń ruchy z tablicy
// jak tablica będzie pusta wygrane

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
