import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenu {

  private apiUrl = 'http://localhost/api/v1/sidebar/menu-headers';

  constructor(private http: HttpClient) {}

  getMenuHeaders(): Observable<any> {

    return this.http.get<MenuHeader>(this.apiUrl);
  }

}
