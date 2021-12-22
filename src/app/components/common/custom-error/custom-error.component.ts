import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.css']
})
export class CustomErrorComponent implements OnInit {
  @Input() message: string = 'Error fetching data!';

  constructor() {
  }

  ngOnInit(): void {
  }

}
