import {Component, OnInit} from '@angular/core';
import {DatafetchService} from "../../services/datafetch.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beerData: any[] = []
  loading: boolean = true
  page = 1
  limit = 4

  setPaginationLimit(lim: number) {
    this.beerClient.getBeersPagination(1, lim).subscribe((response) => {
      console.log(response)
      this.loading = false;
      this.limit = lim;
      this.page = 1;
      this.beerData = response as any[];
    })
  }

  onViewMore() {
    this.beerClient.getBeersPagination(this.page + 1, this.limit).subscribe((response) => {
      this.loading = false;
      this.page = this.page + 1;
      this.beerData = [...this.beerData, ...response as any[]];
    })
  }

  constructor(private beerClient: DatafetchService) {
  }

  ngOnInit(): void {
    this.beerClient.getBeersPagination(1, 4).subscribe((response) => {
      this.beerData = response as any[];
    })
  }

}
