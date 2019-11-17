import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm;
    submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    })
  }

  //this function allow to get controls from form group 
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.f.username.value == 'admin' && this.f.password.value == 'admin'){
        this.route.navigate(['admin']);
    }

  }

}
