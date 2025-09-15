import { Routes } from '@angular/router';
import { Home } from './home/home';
import { loadRemoteModule } from '@angular-architects/native-federation';

/**
 * TODO: Antes de const
 * consumir el RoutesService para agregar
 * las rutas al array estas rutas son de este tipo:
 *   {
    path: 'products',
    loadComponent: () =>

      loadRemoteModule('products', './Component').then((m) => m.App),
  },
  estructura:

  interface SidebarMenuItem {
  id:             number;
  menu_header_id: number;
  nombre:         string; es el Component
  dominio:        string; es el path
  pagina:         null; es el modulo
  submenu:        null;
  estado:         number;
  created_at:     Date;
  updated_at:     Date;
}
  todo por dejecto buscan el m. App
 *
 */
export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () =>

      loadRemoteModule('products', './Component').then((m) => m.App),
  },
  {
    path: 'recursos-humanos',
    loadComponent: () =>
      loadRemoteModule('rrhh', './Component').then(m => m.App)
  },
  {
    path: '**',
    component: Home,
  }
];
