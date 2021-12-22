import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatafetchService} from "../../services/datafetch.service";
import {Beer} from "../../types/beer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beerData: Beer[] = []
  loading: boolean = false
  error: boolean = false
  page = 1
  limit = 4

  setPaginationLimit(lim: number) {
    this.error = false
    this.loading = true
    this.beerClient.getBeersPagination(1, lim).subscribe(
      {
        next: (response) => {
          console.log(response)
          this.loading = false;
          this.limit = lim;
          this.page = 1;
          this.beerData = response
        },
        error: () => {
          this.loading = false
          this.error = true
        }
      })
  }


  onViewMore() {
    this.error = false
    this.loading = true
    this.beerClient.getBeersPagination(this.page + 1, this.limit).subscribe(
      {
        next: (response) => {
          this.loading = false;
          this.page = this.page + 1;
          this.beerData = [...this.beerData, ...response];
        },
        error: () => {
          this.loading = false
          this.error = true
        }
      })
  }

  constructor(private beerClient: DatafetchService
  ) {
  }

  ngOnInit(): void {
    this.setPaginationLimit(4)
  }

}
