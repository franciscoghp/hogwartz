import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  house: any;
  public form: FormGroup;
  constructor( private router: Router,public formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      house: ['', Validators.required],
  });
  }

  navigate(){
    this.router.navigate(['/characters/datatable', { house: this.house }]);
  }

  changeHouse( house: any){
    this.house  = house
  }
}
