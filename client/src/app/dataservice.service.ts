import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private dataUrl = 'http://localhost:5000/api/get';
  private API_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.dataUrl);
  }

  postFormData(formData: any) {
    return this.http.post(`${this.API_URL}/api/post`, formData);
  }

}
