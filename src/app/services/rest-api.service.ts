import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RestApi} from '../rest-api';

@Injectable({
  providedIn: 'root'
})
export class RestApiService implements RestApi {
  private HTTP_API_PATH = 'https://localhost:5000/api';
  private type = '';

  constructor(private http: HttpClient, type: string) {
    this.type = type;
  }

  create(input: any): void {
    this.http.post<any>(this.HTTP_API_PATH + '/' + this.type, {input}).subscribe();
  }

  delete(id: number): void {
    this.http.post<any>(this.HTTP_API_PATH + '/' + this.type, {id}).subscribe();
  }

  readAll(): Observable<any[]> {
    return this.http.get<any[]>(this.HTTP_API_PATH + '/' + this.type);
  }

  read(input: any): any {
    return this.http.get<any>(this.HTTP_API_PATH + '/' + this.type);
  }

  update(input: any): void {
    this.http.put<any>(this.HTTP_API_PATH + '/' + this.type, input);
  }
}
