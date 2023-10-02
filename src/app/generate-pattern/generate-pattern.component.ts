import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-pattern',
  templateUrl: './generate-pattern.component.html',
  styleUrls: ['./generate-pattern.component.scss']
})
export class GeneratePatternComponent implements OnInit  {

  ngOnInit(): void {
    this.printPattern(7);
  }

  printPattern(height: number): void {
    for (let i = 1; i <= height; i++) {
      let row = '';
      let spaces = Math.abs(height / 2 - i);
  
      for (let j = 1; j <= spaces; j++) {
        row += ' ';
      }
  
      if (i <= height / 2) {
        row += i;
        for (let k = 1; k <= 2 * (i - 1); k++) {
          row += '*';
        }
        row += i;
      } else {
        const reversedRow = height - i + 1;
        row += reversedRow;
        for (let k = 1; k <= 2 * (reversedRow - 1); k++) {
          row += '*';
        }
        row += reversedRow;
      }
  
      console.log(row);
    }
  }

  generatePattern() {
    this.printPattern(7);
  }

}
