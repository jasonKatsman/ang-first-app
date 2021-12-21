import {Component, OnInit} from '@angular/core';
import {DatafetchService} from "../../services/datafetch.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css']
})
export class BeerPageComponent implements OnInit {
  beerInfo: any = undefined

  constructor(private beerClient: DatafetchService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id)
    this.beerClient.getBeerInfo(id).subscribe((response) => {
      this.beerInfo = response as any[];
    })

  }

}
