import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {RestApiService} from './rest-api.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'users';
  constructor(private http: HttpClient) { }

  delete(callback, id: number): void {
    this.http.delete<any>(this.HTTP_API_PATH + '/' + id).subscribe(
      () => {
        callback();
      },
      (error) => {
        console.log('request is Bad : msg' + error.toString());
        alert('Chyba při mázání uživatele');
        throwError(error);
      },
      () => {

      }
    );
  }

}
