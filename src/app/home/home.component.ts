import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = {  id: 1,
     name: "string",
     power: this.powers,
     alterEgo: "test"}

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = {  id: 2,
      name: "Naresh",
      power: this.powers,
      alterEgo: "test"}
  }

}
