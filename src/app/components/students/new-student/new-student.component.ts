import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  public form: FormGroup;
  fotoFile : File = null
  imgFoto = null;
  data: any = {}
  constructor( public formBuilder: FormBuilder, public http: HttpService,
                private router: Router,  
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      patronus: ['', Validators.required],
      age: ['', Validators.required],
      image: ['', Validators.required],
  });
  }

  uploadPhoto(file: any){
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (event:any) => {
      this.form.controls.image.setValue(event.target.result)
    }
  }

  save(){
    console.log(this.form.value)
    this.http.setNewStudent(this.form.value)
    this.router.navigate(['/all-new-students']);
  }

}
