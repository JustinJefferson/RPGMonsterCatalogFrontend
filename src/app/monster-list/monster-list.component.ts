import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../models/monster';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent implements OnInit {

  @Input () monsters: Monster[];

  constructor() { }

  ngOnInit() {
  }

}
