import { Component, signal } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { SidebarMenu } from '../../../services/sidebar/sidebar-menu';
import { RouterLink } from '@angular/router';

// servicios

@Component({
  selector: 'app-shell-sidebar',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    RouterLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})

export class Sidebar {

  menuHeaders: MenuHeader[] = [];

  // Estado sidebar responsive
  public isSidebarOpen = signal(false);

  constructor(private sidebarService: SidebarMenu) {
    this.sidebarService
      .getMenuHeaders()
      .subscribe({
        next: (data) => {
          this.menuHeaders = data;
          console.log('Menús cargados:', data);
        },
        error: (err) => console.error(err)
      });
  }

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }
}
