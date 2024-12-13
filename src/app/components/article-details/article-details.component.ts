import { Component, OnInit } from '@angular/core';
import { ArticleDetails } from '../../models/article-details';
import { ArticleDetailsService } from '../../services/article-details.service';

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
})
export class ArticleDetailsComponent implements OnInit {
  articlesDetails: ArticleDetails[] = [];
  constructor(private readonly articleDetailsService: ArticleDetailsService) {}
  ngOnInit(): void {
    this.articleDetailsService
      .getArticlesDetails()
      .subscribe((articleDetails) => {
        this.articlesDetails = articleDetails;
      });
  }
}
