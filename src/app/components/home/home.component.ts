import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FamilleService } from '../../services/famille.service';
import { Famille } from '../../models/famille';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  familles: Famille[] = []; // Liste des familles
  articles: Article[] = []; // Liste complète des articles
  filteredArticles: Article[] = []; // Articles filtrés
  constructor(
    private readonly familleService: FamilleService,
    private readonly articleService: ArticleService
  ) {}
  ngOnInit(): void {
    // Récupère les familles
    this.familleService.getFamilles().subscribe((familles) => {
      this.familles = familles;
    });
    // Récupère tous les articles
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
      this.filteredArticles = articles; // Par défaut, afficher tous les articles
    });
  }
}
