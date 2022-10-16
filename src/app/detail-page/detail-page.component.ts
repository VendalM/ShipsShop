import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShipsService} from "../ships.service";


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.html',
  providers: [ShipsService],
  styleUrls: ['./detail-page.scss']
})

export class DetailPageComponent implements OnInit{
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _shipService: ShipsService,
  ) {}

  shipId: number = +this._activatedRoute.snapshot.queryParams["id"];
  ship: any;

  ngOnInit() {
    console.log(this.shipId)
    this.getShips();
  }

  getShips(){
    this._shipService.getShips().subscribe( (result) =>
    {
     this.ship = result.filter( (ships: { id: number | any[]; }) => {
       return ships?.id === this.shipId;
     })
      console.log(this.ship)
    }
    )
  }
}
