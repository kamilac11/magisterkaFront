import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  submitted = false; //hold status of the form

  constructor(
    private formBuilder:FormBuilder,
    private route: Router

  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     name: new FormControl('',[Validators.required,  Validators.pattern('[A-ZŻŁŚ]([a-ząęćłńóśźż])+')]),
     lastName: new FormControl('',[Validators.required, Validators.pattern('[A-ZŻŁŚ]([a-ząęćłńóśźż])+([\s]?[-]?[A-ZŻŁŚ]([a-ząęćłńóśźż])+)*')]),
     username: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required])
    })
  }

  


  get f() {
    return this.registerForm.controls;
  }

  //gdy formularz jest poprawny wyswielt jego wartosc, i przekieruj do loginu
  onSubmit() {
    this.submitted = true;
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
       this.route.navigate(['login']);
    }
    
  }

}
