import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService: string
  errorMessageFromService: string
  name= ''
  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {

    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']      // we are binding this name with the username of the person logged in 
  
  }

  getWelcomeMessage(){
    // console.log(  this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    // console.log("last line of getWelcomMessage");
  }

  getWelcomeMessageWithParameters(){
    // console.log(  this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    
    // console.log("last line of getWelcomMessage");
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error){
    this.errorMessageFromService = error.error.message;
  
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
  }
}
