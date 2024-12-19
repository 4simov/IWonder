import { Famille } from './famille';

export interface Article {
  id: number;
  nom: string;
  prix_unitaire: number;
  image: string;
  famille: Famille;
}
