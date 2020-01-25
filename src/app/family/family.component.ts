import { Component, OnInit } from '@angular/core';
import { Monster } from '../models/monster';
import { MONSTERS } from '../models/monster-mock';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  monsters: Monster[] = MONSTERS;

  constructor() { }

  ngOnInit() {
  }

}
