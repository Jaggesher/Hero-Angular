import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'windstrom'
  };
  heros: Hero[];
  SelectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onselect ( hero: Hero): void {
    this.SelectedHero = hero;
  }

  getHeroes(): void {
     this.heroService.getHeros().subscribe(heros => this.heros = heros);
  }
}
