import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-new-students',
  templateUrl: './all-new-students.component.html',
  styleUrls: ['./all-new-students.component.scss']
})
export class AllNewStudentsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;

  constructor( public http: HttpService ) {}

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.data = this.http.getNewStudents()
    if(this.data ) this.dtTrigger.next();
      



  }

  ngOnDestroy(): void {    
    this.dtTrigger.unsubscribe();
  }

}
