import { Routes } from '@angular/router';
import { Serie } from './features/serie/serie';
import { SignUp } from './features/sign-up/sign-up';
import { Film } from './features/film/film';
import { Login } from './features/login/login';
import { Menu } from './features/menu/menu';

export const routes: Routes = [
    {path: "film", component :Film},
    {path: "serie", component :Serie},
    {path: "login", component :Login},
    {path: "signUp", component :SignUp},
    {path: "menu", component :Menu},
    {path: '**', redirectTo :'menu'}   
];
