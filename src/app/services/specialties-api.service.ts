import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  // private apiUrl:string = "http://localhost:8080/api"
  private apiUrl:string = "https://ezlabor-api.herokuapp.com/api"
  
  constructor(private http: HttpClient) { }

  getSpecialties(){
    let url = `${ this.apiUrl }/specialties`;
    return this.http.get(url);
  }

}