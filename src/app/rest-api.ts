import {Observable} from 'rxjs';

export interface RestApi {
  create(input: any): void;
  read(id: number): any;
  update(input: any): void;
  delete(id: number): void;
  readAll(): any[];
}
