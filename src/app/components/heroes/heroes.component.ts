import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService) {

      this.heroesService.getHeroes().subscribe(data =>{
        
        this.heroes = data;
        this.loading =  false;
        
      });
   }

  ngOnInit() {
  }

  deleteHero(key: string){
    this.heroesService.deleteHero(key).subscribe(data =>{
      if(data){
      }
      else{
        delete this.heroes[key];
      }

    })
  }

}
