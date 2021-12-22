import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() name: string = ''
  @Input() tagline: string = ''
  @Input() description: string = ''
  @Input() image: string = ''
  @Input() abv: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

}
