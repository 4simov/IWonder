export interface ArticleDetails {
  id: number;
  nom: string;
  prix_unitaire: number;
  image: string;
  description: string;
  quantite: number;
  famille_fk: number;
}
