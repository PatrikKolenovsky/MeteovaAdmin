import { Injectable } from '@angular/core';
import {RestApiService} from './rest-api.service';
import {HttpClient} from '@angular/common/http';
import {Module} from '../model/module';
import {Envi} from '../model/envi';

@Injectable({
  providedIn: 'root'
})
export class EnviService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'envidata';
  constructor(private http: HttpClient) { }

  readAll(): any {
    return this.http.get<Array<Envi>>(this.HTTP_API_PATH);
  }
}
