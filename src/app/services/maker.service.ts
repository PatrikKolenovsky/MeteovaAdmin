import { Injectable } from '@angular/core';
import {RestApiService} from './rest-api.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Maker} from '../model/maker';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'maker';
  constructor(private http: HttpClient) { }

  create(callback, input: any): void {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    this.http.post(this.HTTP_API_PATH, input, httpOptions).subscribe(
      (res) => {
        callback();
        return res;
      },
      (error) => {
        console.log('request is Bad : msg' + JSON.stringify(error));
        alert('Chyba při vytváření výrobce');
        return throwError(error);
      }
    );
  }

  update(callback, input: any, id): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    this.http.put(this.HTTP_API_PATH + '/' + id, input, httpOptions).subscribe(
      (res) => {
        callback();
        return res;
      },
      (error) => {
        console.log('request is Bad : msg' + JSON.stringify(error));
        alert('Chyba při úpravě výrobce');
        return throwError(error);
      }
    );
  }


  delete(callback, id: number): void {
    this.http.delete<any>(this.HTTP_API_PATH + '/' + id).subscribe(
      () => {
        callback();
      },
      (error) => {
        console.log('request is Bad : msg' + error.toString());
        alert('Chyba při mázání zařízení');
        throwError(error);
      },
      () => {

      }
    );
  }


  readAll(): any {
    return this.http.get<Array<Maker>>(this.HTTP_API_PATH);
  }

  read(id: number): Observable<Maker> {
    return this.http.get<Maker>(this.HTTP_API_PATH + '/' + id);
  }
}
