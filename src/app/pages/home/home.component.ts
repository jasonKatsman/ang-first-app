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


  setPaginationLimit(lim: number) {
    this.beerClient.getBeersPagination(1, lim).subscribe((response) => {
      console.log(response)
      this.loading = false;
      this.beerData = response as any[];
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
