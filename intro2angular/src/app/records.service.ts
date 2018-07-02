import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData{
  obj: Object
} 

@Injectable()

export class RecordsService {

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get<myData>('http://localhost:1234/file.php')
    
  }
}
