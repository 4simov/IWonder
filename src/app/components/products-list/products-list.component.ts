import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  familles: any;
  articles: Article[] = [];
  constructor(private readonly articleService: ArticleService) {}
  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }
}
