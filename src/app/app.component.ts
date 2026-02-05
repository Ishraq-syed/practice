import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
    const result = this.doSubtract(10, 5);
    console.log('Subtraction result:', result);
  }

  doSubtract(a: number, b: number): number {
    return a - b;
  }
}
