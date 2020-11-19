import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestApiService} from './rest-api.service';
import {ModuleType} from '../model/module-type';

@Injectable({
  providedIn: 'root'
})

export class ModuleTypeService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'moduletype';
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
        alert('Chyba při vytváření modulu');
        return throwError(error);
      }
    );
  }

  delete(id: number): void {
    this.http.post<any>(this.HTTP_API_PATH, {id}).subscribe();
  }

  readAll(): any {
    return this.http.get<Array<ModuleType>>(this.HTTP_API_PATH);
  }

  read(id: number): Observable<ModuleType> {
    return this.http.get<ModuleType>(this.HTTP_API_PATH + '/' + id);
  }
}
