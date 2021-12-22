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
  loading = false
  error = false

  constructor(private beerClient: DatafetchService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.error = false
    this.loading = true
    if (id)
      this.beerClient.getBeerInfo(id).subscribe({
        next: (response) => {
          this.beerInfo = response as any[];
          this.loading = false
        },
        error: () => {
          this.error = true
          this.loading = false
        }
      })
  }

}
