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
saveProduct(data:any){

  console.log(data)
  return this.http.post("http://localhost:3800/post",data)
}

url_del="http://localhost:3800/delete"
delProduct_md(id:any)
{
  return this.http.delete(`${this.url_del}/${id}`)
}
url_update="http://localhost:3800/update"
updateProduct_md(id:any,data:any)
{
  return this.http.put(`${this.url_update}/${id}`,data)
}
}
