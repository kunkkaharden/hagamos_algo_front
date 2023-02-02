export interface RouterLink {
  name: string;
  path: string;
  title: string;
}

export const routesLinks: RouterLink[] = [
  {
    path: '/',
    name: 'home',
    title: 'Inicio',
  },
  {
    path: '/adoptar',
    name: 'adoptar',
    title: 'Adoptar',
  },
  {
    path: '/eventos',
    name: 'eventos',
    title: 'Eventos',
  },
  {
    path: '/contactos',
    name: 'contactos',
    title: 'Contactos',
  },
];

export const routesFooter: RouterLink[] = [
  {
    path: '/',
    name: 'home',
    title: 'Inicio',
  },
  {
    path: '/adoptar',
    name: 'adoptar',
    title: 'Adoptar',
  },
  {
    path: '/eventos',
    name: 'eventos',
    title: 'Eventos',
  },
  {
    path: '/contactos',
    name: 'contactos',
    title: 'Contactos',
  },
];
