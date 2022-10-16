import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ShipsService {
  private shipsUrl = "api/spaceShips"

  constructor(private _httpClient: HttpClient) {
  }

  public getShips(): Observable<Array<any>>{
    return this._httpClient.get<any[]>(this.shipsUrl);
  }
}
