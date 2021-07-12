import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {
  }

  postOrder(order: any): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
      });

    const options = {headers};
    return this.http.post<any>('https://devi-bag.by/postOrder.php', order);
  }

}
