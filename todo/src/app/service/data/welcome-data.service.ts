import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message: string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

executeHelloWorldBeanService()
{
  return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');

  // console.log("Execute hello world service");
}

executeHelloWorldServiceWithPathVariable(name){
  // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
  // let headers = new HttpHeaders({
  //   Authorization: basicAuthHeaderString
  // })
  //  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers});
  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);

}

// createBasicAuthenticationHttpHeader() {
//   let username = "atikash"
//   let password = "dummy"
//   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

//   return basicAuthHeaderString;
// }
}
