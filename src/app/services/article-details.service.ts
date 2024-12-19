import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleDetails } from '../models/article-details';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailsService {
  getArticleById(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly httpClient: HttpClient) {}
  getArticlesDetails() {
    return this.httpClient.get<ArticleDetails[]>(
      'https://localhost:7155/api/Article'
    );
  }
}
