import {Injectable} from '@angular/core';
import {RestApiService} from './rest-api.service';
import {Device} from '../model/device.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'device';

  constructor(private http: HttpClient) {
  }


  create(input: any): void {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    this.http.post(this.HTTP_API_PATH, input, httpOptions).subscribe(results => {
      console.log(results);
    });

    // this.http.post<any>(this.HTTP_API_PATH, {input}, {headers: new HttpHeaders({'Content-Type': 'text/json'})})
    //   .subscribe(
    //     (res) => console.log(res),
    //     (err) => console.log(err)
    //   );
  }

  delete(id: number): void {
    this.http.post<any>(this.HTTP_API_PATH, {id}).subscribe();
  }

  readAll(): any {
    return this.http.get<Array<Device>>(this.HTTP_API_PATH + '/detail');
  }

  read(id: number): Observable<Device> {
    return this.http.get<Device>(this.HTTP_API_PATH + '/detail/' + id);
  }

}
