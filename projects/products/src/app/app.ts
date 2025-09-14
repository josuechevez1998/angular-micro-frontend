import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products-root',
  imports: [MatCardModule],
  standalone: true,
  template: `
    <mat-card appearance="outlined">
      <mat-card-content>Products App</mat-card-content>
    </mat-card>
  `

})
export class App {
  protected readonly title = signal('products');
}
