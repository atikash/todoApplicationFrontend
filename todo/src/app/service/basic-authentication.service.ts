import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../menu/app.constants';

export const TOKEN ='token';
export const AUTHENTICATED_USER ='authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username, password) {
  //   if (username === "atikash" && password === "dummy") {
  //     sessionStorage.setItem('authenticatedUser', username);
  //     return true;
  //   }
  //   return false;
  // }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }


  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map(
          data => {

            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
  }

}

export class AuthenticationBean {
  constructor(public message: string) {

  }
}
