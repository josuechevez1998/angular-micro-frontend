import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  private apiUrl = 'http://localhost/api/v1/sidebar/menus';

  constructor(private http: HttpClient) { }

  getMenus(): Observable<any> {

    return this.http.get<SidebarMenuItem>(this.apiUrl);
  }

}
