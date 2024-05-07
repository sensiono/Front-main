import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresComponent } from './components/offres/offres.component';
import { AjouterOffreComponent } from './components/ajouter-offre/ajouter-offre.component';
import { ModifierOffreComponent } from './components/modifier-offre/modifier-offre.component';
import { AjoutReclamationComponent } from './components/ajout-reclamation/ajout-reclamation.component';
import { ModifierReclamationComponent } from './components/modifier-reclamation/modifier-reclamation.component';
import { ReclamationsComponent } from './components/reclamations/reclamations.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { AdminmainComponent } from './components/admin/adminmain/adminmain.component';
import { BlogComponent } from './components/blog/blog.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { ViewBlogComponent } from './components/view-blog/view-blog.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'reclamations', component: ReclamationsComponent },
  { path: 'ajouter-reclamation', component: AjoutReclamationComponent },
  { path: 'modifier-reclamation/:id', component: ModifierReclamationComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'admin', component:  AdminmainComponent },
  { path: 'blog', component:BlogComponent},
  { path: 'view-all', component:ViewAllComponent},
  { path: 'view-blog/:id', component:ViewBlogComponent},
  { path: 'search-by-name', component:SearchByNameComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
