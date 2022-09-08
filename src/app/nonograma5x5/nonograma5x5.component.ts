import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonograma5x5',
  templateUrl: './nonograma5x5.component.html',
  styleUrls: ['./nonograma5x5.component.css']
})
export class Nonograma5x5Component implements OnInit {
  squares: string[];
  xIsNext: boolean;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(25).fill(null);
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
  }

}
