import { Component, OnInit } from '@angular/core';
import { ArticleDetails } from '../../models/article-details';
import { ArticleDetailsService } from '../../services/article-details.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-details',
  standalone: true,
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  imports: [CommonModule],
})
export class ArticleDetailsComponent implements OnInit {
  article: ArticleDetails | null = null;

  constructor(
    private readonly articleDetailsService: ArticleDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Permet de récupérer l'id dans l'URL
      const articleId = params.get('id');

      // Si un 'id' est présent dans l'URL
      if (articleId) {
        // Appelle le service pour récupérer les détails des articles
        this.articleDetailsService
          .getArticlesDetails()
          .subscribe((articlesDetails) => {
            // Cherche l'article dont l'id correspond à celui passé dans l'URL
            this.article =
              articlesDetails.find(
                (article) => article.id.toString() === articleId // Comparaison entre l'id de l'article et l'id de l'URL
              ) || null; // Si aucun article ne correspond, met null à this.article
          });
      }
    });
  }
}
