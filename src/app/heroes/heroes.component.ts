import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROS} from '../moc-hero';

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
  heros = HEROS;
  SelectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

  onselect ( hero: Hero): void {
    this.SelectedHero = hero;
  }
}
