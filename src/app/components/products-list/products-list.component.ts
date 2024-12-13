import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private readonly articleService: ArticleService) {}
  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }
}
