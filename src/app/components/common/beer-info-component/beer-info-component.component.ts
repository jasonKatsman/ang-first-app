import {Component, Input, OnInit} from '@angular/core';
import {Beer} from "../../../types/beer";

@Component({
  selector: 'app-beer-info-component',
  templateUrl: './beer-info-component.component.html',
  styleUrls: ['./beer-info-component.component.css']
})
export class BeerInfoComponentComponent implements OnInit {
  @Input() beer!: Beer

  constructor() {
  }

  ngOnInit(): void {
  }

}
