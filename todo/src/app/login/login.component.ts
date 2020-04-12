import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='atikash'
  errorMessage='Invalid Credentials'
  password = ''
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin() {
    // console.log(this.username)
    // if(this.username === "atikash" && this.password === "dummy") {
      if(this.hardcodedAuthentication.authenticate(this.username,this.password))
      {
      this.router.navigate(['welcome', this.username])
    this.invalidLogin = false
    }
    else
    this.invalidLogin = true
  }
}
