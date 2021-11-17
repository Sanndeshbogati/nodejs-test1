import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient ) { }
  getCat(){
return this.http.get('http://localhost:3800/category')
  }

}
