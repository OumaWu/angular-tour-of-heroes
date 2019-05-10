import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  // Inject a singleton service object into the component
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes(); // invoke the method to call the service
  }

  // method to call the service
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(Hero): void {
    this.selectedHero = Hero;
  }

}
