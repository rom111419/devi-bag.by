import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export type OptionsT = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: "body";
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  withCredentials?: boolean;
  responseType?: any;
}

@Injectable({
  providedIn: "root"
})
export class CrudService {
  url: string = "https://devi-bag.by";
  options = new HttpParams();
  body = {};

  constructor(private http: HttpClient) {
  }

  get<T>(path?: any, options?: OptionsT, urlValue?: string): Observable<T> {
    const url = urlValue ? urlValue : this.url;
    return this.http.get<T>(`${path}`, options);
  }

  create<T>(path: any, body?: any, urlValue?: string, options?: OptionsT): Observable<T> {
    const url = urlValue ? urlValue : this.url;
    return this.http.post<T>(`${url}${path}`, body, options);
  }

  put<T>(path: any, body: any, options?: OptionsT, urlValue?: string): Observable<T> {
    const url = urlValue ? urlValue : this.url;
    return this.http.put<T>(`${url}${path}`, body, options);
  }

  patch<T>(path: any, body: any, options?: OptionsT, urlValue?: string): Observable<T> {
    const url = urlValue ? urlValue : this.url;
    return this.http.patch<T>(`${url}${path}`, body, options);
  }

  del<T>(path: any, options?: OptionsT, urlValue?: string): Observable<T> {
    const url = urlValue ? urlValue : this.url;
    return this.http.delete<T>(`${url}${path}`, options);
  }
}
