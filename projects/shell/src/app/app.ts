import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { Footer } from "./components/shared/footer/footer";

@Component({
  selector: 'app-shell-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ojo, es style**s**Urls
})
export class App {
  protected readonly title = signal('shell');

  // Estado para sidebar responsive
  public isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }
}
