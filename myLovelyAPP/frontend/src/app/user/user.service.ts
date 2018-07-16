import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addUser(username, email, gender, password) {
    const user = {
      username: username,
      email: email,
      gender: gender,
      password: password
    };

    return this.http.post(`${this.uri}/users/add`, user);
  }
}
