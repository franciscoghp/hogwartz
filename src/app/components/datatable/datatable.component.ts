import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  year: number;
  house: string;
  data: any;

  constructor( public http: HttpService, private activatedRoute: ActivatedRoute ) { 
    this.house = this.activatedRoute.snapshot.params.house
  }

  ngOnInit(): void {

    this. year = Number(new Date().getFullYear())
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };

    this.http.getCharacters(this.house)
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
