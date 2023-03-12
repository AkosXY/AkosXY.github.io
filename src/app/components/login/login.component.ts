import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passType: string = "password";
  isText: boolean = false;
  showIcon: string = "fa-eye-slash";
  showPadding: string = "pr-0.5";

  constructor() { }

  ngOnInit(): void {
  }


  hideShowPassword(){
    this.isText = !this.isText;
    if(this.isText){
      this.showIcon = "fa-eye";
      this.passType = "text"
      this.showPadding = "pr-1"

    } else{
      this.showIcon = "fa-eye-slash";
      this.passType = "password";
      this.showPadding = "pr-0.5"
    }
  }

}
