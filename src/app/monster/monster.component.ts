import { Component, OnInit } from '@angular/core';
import { Monster } from '../models/monster';
import { MONSTERS } from '../models/monster-mock';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {

  monsters: Monster[] = MONSTERS;

  constructor() { }

  ngOnInit() {
  }

}
