import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesUrl: string = 'https://heroesapp-ed012.firebaseio.com/heroes';

  constructor(private http: Http) { }

  newHero(hero: Hero) {
    let body = JSON.stringify(hero);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesUrl+ '.json', body, { headers: headers })
      .map(res => {
        return res.json();
      }
      );
  }

  updateHero(hero: Hero, key$: string) {
    let url = this.heroesUrl + '/' + key$ + '.json'
    let body = JSON.stringify(hero);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put(url, body, { headers: headers })
      .map(res => {
        return res.json();
      }
      );
  }

  getHero(key$: string){
    let url = this.heroesUrl + '/' + key$ + '.json';
    return this.http.get(url)
    .map(res => res.json());
  }

  getHeroes(){
    let url = this.heroesUrl +'.json';
    return this.http.get(url)
    .map(res => res.json());
  }

  deleteHero(key: string){
    let url = this.heroesUrl + '/'+ key + '.json';
    return this.http.delete(url)
    .map(res => res.json()); 
  }


}
