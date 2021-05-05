import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Building } from '../model/building';



@Injectable({
  providedIn: 'root'
})
export class MachinesService {
  

   public building: string;
  constructor(private http: HttpClient) { }

  getMachineLists(): Observable<any> {
    const baseUrl = "http://3.227.143.68/sim/state";
    return this.http.get(baseUrl)
      .pipe(catchError(this.handleError))
  }

  //Handle server error
  handleError(error) {
    return throwError(error.message || "Server Error has occurred!")
  }


  private baseUrl = 'http://3.227.143.68/sim/task';
  createNewBuilding(employee: Building): Observable<any> {
    return this.http.post(`${this.baseUrl}`, employee);
    
  }


}
