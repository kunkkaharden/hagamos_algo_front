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
    path: '/',
    name: 'somos',
    title: 'Sobre nosotros',
  },
  {
    path: '/',
    name: 'apoyar',
    title: 'Colaborar',
  },
  {
    path: '/contactos',
    name: 'contactos',
    title: 'Contactos',
  },
  {
    path: '/',
    name: 'adoptar',
    title: 'Adoptar',
  },
];

export const routesFooter: RouterLink[] = [
  {
    path: '/',
    name: 'somos',
    title: 'Sobre nosotros',
  },
  {
    path: '/',
    name: 'apoyar',
    title: 'Colaborar',
  },
  {
    path: '/contactos',
    name: 'contactos',
    title: 'Contactos',
  },
  {
    path: '/',
    name: 'adoptar',
    title: 'Adoptar',
  },
];
