import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: ProductsListComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'article-details', component: ArticleDetailsComponent },
];
