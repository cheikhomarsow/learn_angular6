import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  message: string,
  success: boolean
}

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }
}
