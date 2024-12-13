import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FamilleService } from '../../services/famille.service';
import { Famille } from '../../models/famille';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  familles: Famille[] = [];
  constructor(private readonly familleService: FamilleService) {}
  ngOnInit(): void {
    this.familleService.getFamilles().subscribe((familles) => {
      this.familles = familles;
    });
  }
}
