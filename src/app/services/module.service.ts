import { Injectable } from '@angular/core';
import {RestApiService} from './rest-api.service';
import {Module} from '../model/module';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'modules';
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
        alert('Chyba při úpravě modulu');
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
        alert('Chyba při mázání modulu');
        throwError(error);
      },
      () => {

      }
    );
  }

  readAll(): any {
    return this.http.get<Array<Module>>(this.HTTP_API_PATH);
  }

  readAllOtherModulesByDeviceId(deviceId: number): any {
    return this.http.get<Array<Module>>(this.HTTP_API_PATH + '/other/' + deviceId);
  }

  read(id: number): Observable<Module> {
    return this.http.get<Module>(this.HTTP_API_PATH + '/' + id);
  }
}
