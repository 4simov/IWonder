import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Famille } from '../models/famille';

@Injectable({
  providedIn: 'root',
})
export class FamilleService {
  constructor(private readonly httpClient: HttpClient) {}
  getFamilles() {
    return this.httpClient.get<Famille[]>('https://localhost:7155/api/Famille');
  }
}
