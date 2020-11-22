import {Injectable} from '@angular/core';
import {RestApiService} from './rest-api.service';
import {Device} from '../model/device.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'device';

  constructor(private http: HttpClient) {
  }


  create(callback, input: any): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    this.http.post(this.HTTP_API_PATH, input, httpOptions).subscribe(
      (res) => {
        callback();
        return res;
      },
      (error) => {
        console.log('request is Bad : msg' + error.toString());
        alert('Chyba při vytváření zařízení');
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
        console.log('request is Bad : msg' + error.toString());
        alert('Chyba při úpravě zařízení');
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
    return this.http.get<Array<Device>>(this.HTTP_API_PATH + '/detail');
  }

  read(id: number): Observable<Device> {
    return this.http.get<Device>(this.HTTP_API_PATH + '/detail/' + id);
  }

}
