import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { dataResult } from '../../models/dataresult';
import { saveandload } from '../../models/dataresult';

/*
  Generated class for the RestdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestdbProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestdbProvider Provider');
  }

  jsondb:String[] = ["cpu","mainboard","vgacard","memory","hdd","ssd","psu","case","cpucooler","monitor"];

  feed(index:any):Observable<dataResult> {
    let url = "assets/jsondb/" + this.jsondb[index] +".json";
    return this.http.get<dataResult>(url);
  }

  loadFile(path:any):Observable<saveandload> {
    return this.http.get<saveandload>(path);
  }



}
