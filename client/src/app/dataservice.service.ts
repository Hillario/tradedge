import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private dataUrl = 'http://localhost:5000/api/get';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.dataUrl);
  }

}
