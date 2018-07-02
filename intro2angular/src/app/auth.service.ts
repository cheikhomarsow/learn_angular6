import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    console.log(username, password)
    //post these details to API server return user info if correct
    return this.http.post('/api/auth.php', {
      username,
      password
    })
  }
}
