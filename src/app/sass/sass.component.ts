import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.css']
})
export class SassComponent implements OnInit {

  value: string;
  sassControl= new FormControl('', Validators.required);
  constructor() { 
    
  }

  ngOnInit() {
  }

  accent(){
    this.value='accent'
  }

}
