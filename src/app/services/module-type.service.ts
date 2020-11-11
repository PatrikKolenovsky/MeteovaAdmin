import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestApiService} from './rest-api.service';
import {ModuleType} from '../model/module-type';

@Injectable({
  providedIn: 'root'
})

export class ModuleTypeService {

  HTTP_API_PATH = RestApiService.HTTP_API_PATH + 'moduletype';
  constructor(private http: HttpClient) { }

  create(input: any): void {
    this.http.post<any>(this.HTTP_API_PATH, {input}).subscribe();
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
