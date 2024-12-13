import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private readonly httpClient: HttpClient) {}
  getArticles() {
    return this.httpClient.get<Article[]>('https://localhost:7155/api/Article');
  }
}
