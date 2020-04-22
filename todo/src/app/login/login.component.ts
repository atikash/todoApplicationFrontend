import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'atikash'
  errorMessage = 'Invalid Credentials'
  password = ''
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuthentication: BasicAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin() {
    // console.log(this.username)
    // if(this.username === "atikash" && this.password === "dummy") {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else
      this.invalidLogin = true
  }


  handleBasicAuthLogin() {
    // executeAuthenticationService( username, password){
    this.basicAuthentication.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )

  }
}
