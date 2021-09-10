import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  year: number;
  house: string;
  data: any;

  constructor( public http: HttpService) { }

  ngOnInit(): void {

    this. year = Number(new Date().getFullYear())
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };

    this.http.getTeachers()
    .subscribe(res => {
      this.data = res
      for(let iten of this.data){
        if(iten.yearOfBirth) iten.age = this.year - iten.yearOfBirth
      }
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {    
    this.dtTrigger.unsubscribe();
  }

}
