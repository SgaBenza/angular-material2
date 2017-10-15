import { ArrayForm } from './form/array.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidazioniComponent } from './validation/validazioni.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'validazioni', component: ValidazioniComponent },
    { path: 'array', component: ArrayForm }
    // { path: 'posts', component: PostsComponent },
    // { path: 'tempdriven', component: TemplateDrivenFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

