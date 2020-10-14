import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RestApi} from '../rest-api';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  public static HTTP_API_PATH = 'https://localhost:5000/api';

  constructor() {
  }

}
