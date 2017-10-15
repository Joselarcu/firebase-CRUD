import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: Hero = {
    name: "",
    bio: "",
    brand: "Marvel"
  };

  new: boolean = false;
  id: string;

  constructor(private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.id = params.id;
      if(this.id != 'new'){
        this.heroesService.getHero(this.id).subscribe(hero => this.hero = hero);
      }

    });
  }

  ngOnInit() {
  }

  save() {
    console.log("hero", this.hero);
    if (this.id === 'new') {
      this.heroesService.newHero(this.hero)
      .subscribe(data => {
        this.router.navigate(['/hero', data.name]);
      },
      error => console.log(error));

    }
    else {
      this.heroesService.updateHero(this.hero, this.id)
      .subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
    }
   
  }

  addNew(form: NgForm){
    this.router.navigate(['/hero','new']);
    form.reset({
      brand: 'Marvel'
    });
  }

}
