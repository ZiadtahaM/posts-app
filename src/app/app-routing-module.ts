import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditPost } from './components/edit-post/edit-post';
import { SinglePost } from './components/single-post/single-post';
import { Componentshome } from './components/componentshome/componentshome';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:Componentshome},
     {path: 'edit/:id', component: EditPost},
     {path:'singlepost/:id',component:SinglePost}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
