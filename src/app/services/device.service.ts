import {Injectable} from '@angular/core';
import {RestApiService} from './rest-api.service';
import {Device} from '../model/device.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ok} from 'assert';

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

  delete(id: number): void {
    this.http.delete<any>(this.HTTP_API_PATH + '/' + {id}, ).subscribe();
  }

  readAll(): any {
    return this.http.get<Array<Device>>(this.HTTP_API_PATH + '/detail');
  }

  read(id: number): Observable<Device> {
    return this.http.get<Device>(this.HTTP_API_PATH + '/detail/' + id);
  }

}
