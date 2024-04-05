import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {
  constructor(private http: HttpClient) { }

  public endPointUrl : string = "http://localhost:5199/Rectangle/dimensions";

  fetchDimensions(): Observable<any> {
    return this.http.get<any>(this.endPointUrl);
  }


  updateData(data: any): Observable<any> {
    debugger
    return this.http.put<any>(this.endPointUrl, data);
  }
}