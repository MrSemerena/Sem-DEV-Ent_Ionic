import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'anime',
    loadChildren: () => import('./pages/anime/anime.module').then( m => m.AnimePageModule)
  },
  {
    path: 'dau',
    loadChildren: () => import('./pages/dau/dau.module').then( m => m.DauPageModule)
  },
  {
    path: 'horror',
    loadChildren: () => import('./pages/horror/horror.module').then( m => m.HorrorPageModule)
  },
  {
    path: 'manga',
    loadChildren: () => import('./pages/manga/manga.module').then( m => m.MangaPageModule)
  },
  {
    path: 'mgtow',
    loadChildren: () => import('./pages/mgtow/mgtow.module').then( m => m.MgtowPageModule)
  },
  {
    path: 'videogames',
    loadChildren: () => import('./pages/videogames/videogames.module').then( m => m.VideogamesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
