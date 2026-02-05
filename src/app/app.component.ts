import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit(): void {
    this.doSum();
  }

  doSum(): void {
    const a = 5;
    const b = 10;
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
  }
}
