interface SidebarMenuItem {
  id:             number;
  menu_header_id: number;
  nombre:         string;
  dominio:        string;
  pagina:         null;
  submenu:        null;
  estado:         number;
  created_at:     Date;
  updated_at:     Date;
}

interface MenuHeader {
  id: number;
  nombre: string;
  estado: string;
  created_at: Date;
  updated_at: Date;
  sidebar_menu?: null | SidebarMenuItem[];
}
