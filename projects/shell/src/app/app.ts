import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./components/shared/footer/footer";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { SidebarMenu } from './services/sidebar/sidebar-menu';

@Component({
  selector: 'app-shell-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Header,
    Footer,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRippleModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css' // ✅ singular
})
export class App {

  protected readonly title = signal('shell');

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
