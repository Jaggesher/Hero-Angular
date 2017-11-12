import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './moc-hero';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(msg: string):  Observable<Hero[]> {
    this.messageService.add('HeroService:  fetched heroes' + msg);
    return of(HEROS);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of( HEROS.find(hero => hero.id === id));
  }
}
