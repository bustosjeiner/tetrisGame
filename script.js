"use strict";

let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");
const POINTPIECE = 25;
const COLORSTYLE = [
  "#FFE700",
  "#A600FF",
  "#55FF02",
  "#FE0056",
  "#FF7F27",
  "#00FFFF",
  "#0080FF",
];
const STROKESTYLE = [
  "#595100",
  "#480555",
  "#2FA000",
  "#9C012B",
  "#9B4702",
  "#075E6D",
  "#061E66",
];
//Create each piece
const SQUAREPIECE = [
  [1, 1],
  [1, 1],
];
const LINEPIECE = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const JPIECE = [
  [1, 0, 0],
  [1, 1, 1],
  [0, 0, 0],
];
const LPIECE = [
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
const TPIECE = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 0, 0],
];
const SPIECE = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 0, 0],
];
const ZPIECE = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 0],
];
const PIECES = [SQUAREPIECE, LINEPIECE, JPIECE, LPIECE, TPIECE, SPIECE, ZPIECE];
/*const KEYS = {
  LEFT: ArrowLeft,
  UP: ArrowUP,
  RIGHT: ArrowRight,
  DOWN: ArrowDown,
};*/
//create matriz board
const MATRIZBOARD = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//style the matriz board
ctx.lineWidth = 2;
ctx.strokeStyle = "#47555c";
for (let y = 0; y < MATRIZBOARD.length; y++) {
  for (let x = 0; x < MATRIZBOARD[y].length; x++) {
    ctx.fillStyle = "#262D31";
    ctx.fillRect(x * POINTPIECE, y * POINTPIECE, POINTPIECE, POINTPIECE);
    ctx.rect(x * POINTPIECE, y * POINTPIECE, POINTPIECE, POINTPIECE);
  }
}
ctx.stroke();
class Board {
  // Reset the board when we start a new game.
  reset() {
    this.grid = this.emptyBoard();
  }

  // Clean matrix filled with zeros.
  emptyBoard() {
    for (let y = 0; y < MATRIZBOARD.length; y++) {
      for (let x = 0; x < MATRIZBOARD[y].length; x++) {
        MATRIZBOARD[y][x] = 0;
      }
    }
    return MATRIZBOARD;
  }
}

class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.generateAleatoryPiece();
  }

  aleatoryColorNumber(colorsArray) {
    return Math.floor(Math.random() * colorsArray.length);
  }
  aleatoryPieceNumber(piecesArray) {
    return Math.floor(Math.random() * piecesArray.length);
  }

  generateAleatoryPiece() {
    this.auxiliar = this.aleatoryPieceNumber(PIECES)
    this.number = this.aleatoryColorNumber(COLORSTYLE);
    this.piece = PIECES[this.auxiliar];
    this.color = COLORSTYLE[this.number];
    this.stroke = STROKESTYLE[this.number];
  }

  drowPieces() {
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.stroke;
    for (let y = 0; y < this.piece.length; y ++) {
      for (let x = 0; x < this.piece[y].length; x ++) {
        if ((this.piece[x][y] == 1)) {
          this.ctx.fillRect(x * POINTPIECE, y * POINTPIECE, POINTPIECE, POINTPIECE);
          this.ctx.strokeRect(x * POINTPIECE, y * POINTPIECE, POINTPIECE, POINTPIECE)
        }
      }
    }
  }
}
let board = new Board();

function play() {
  board.reset();
  console.table(board.grid);
  let piece = new Piece(ctx);
  piece.drowPieces();
}
