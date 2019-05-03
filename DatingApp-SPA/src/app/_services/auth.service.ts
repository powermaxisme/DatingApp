import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        // console.log(response);
        const user = response;
        if (user) {
          console.log(user.token);
          localStorage.setItem('token', user.token);
        }
      })
    );

    /* response = {"token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9
        .eyJuYW1laWQiOiIzIiwidW5pcXVlX25hbWUiOiJwb3dlcm1heCIsIm5iZiI6MTU1Njc5MDAxMSwiZXhwIjoxNTU2ODc2NDExLCJpYXQiOjE1NTY3OTAwMTF9
        .kbA8fS6IwaRuD8p6GK6zFxEHPmV_2OLz7glQWLZPbzeq2uS939vk0BriHTlJE_i8FLARhIMyaRpca1com6ZAdA"}
    */
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

}
