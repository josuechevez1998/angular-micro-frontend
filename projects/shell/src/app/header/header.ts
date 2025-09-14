import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarMenu } from '../services/sidebar/sidebar-menu';

@Component({
  selector: 'app-shell-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  userName = 'Josue Developer'; // luego lo conectas al servicio de auth

  menuHeaders: MenuHeader[] = [];

  constructor(private sidebarService: SidebarMenu) {

  }

  menuHeader() {
    this.sidebarService.getMenuHeaders()
      .subscribe({
        next: data => {
          console.log('Respuesta del API:', data);
          this.menuHeaders = data;
        },
        error: err => {
          console.log(err);
        }
      });
  }
}
