import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() paginationLimitOptions = [4, 8, 12, 16, 24, 32]
  @Output() onPaginationChange = new EventEmitter<number>()

  onChange(e: any) {
    const value = parseInt(e.target.value)
    this.onPaginationChange.emit(value)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
