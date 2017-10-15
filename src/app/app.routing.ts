import { ArrayForm } from './form/array.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidazioniComponent } from './validation/validazioni.component';
import { SassComponent } from './sass/sass.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'array', component: ArrayForm },
    { path: 'posts', component: PostsComponent },
    { path: 'validazioni', component: ValidazioniComponent },
    { path: 'sass', component: SassComponent }   
    // { path: 'posts', component: PostsComponent },
    // { path: 'tempdriven', component: TemplateDrivenFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

