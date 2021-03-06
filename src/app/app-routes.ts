import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes'}

];


export const APP_ROUTING = RouterModule.forRoot(routes);
