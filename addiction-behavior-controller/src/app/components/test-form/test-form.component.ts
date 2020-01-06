import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    const registrationForm = new FormGroup({
      'name': new FormControl('Enter your name', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
      ]),
      'username': new FormControl('', Validators.required),
  })

    
  }

}
