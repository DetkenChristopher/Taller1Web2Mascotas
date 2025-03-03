import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { FormularioRegistroComponent } from './pages/formulario-registro/formulario-registro.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path:'Nosotros',
        component: NosotrosComponent
    },
    {
        path:'formulario-usuario',
        component:FormularioUsuarioComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component:Pagina404Component
    },
    
];
