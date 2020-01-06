import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {
  activityForm;


  constructor(
    private formBuilder:FormBuilder,
    private route: Router
  ) { }

// index rekordu sam sie musi dodawac 
//onSubmit dodajemy rekord idRekordu, aktywnosci1-5; idUsera; czasDodania 

  ngOnInit() {
    this
  }

}
