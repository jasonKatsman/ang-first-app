import { Component, OnInit } from '@angular/core';
import {DatafetchService} from "../../services/datafetch.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css']
})
export class BeerPageComponent implements OnInit {
  beerInfo:any=undefined
  constructor(private beerClient: DatafetchService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    // const id:number =this.activatedRoute.url.subscribe(
    //   params => params[1])

    this.beerClient.getBeerInfo(2).subscribe((response) => {
      this.beerInfo = response as any[];
    })
  }

}
