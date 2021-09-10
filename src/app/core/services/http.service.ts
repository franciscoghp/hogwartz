import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  newStudents: any = []
  constructor( private http: HttpClient ) { }

  getCharacters(nombreCasa: string){
    return this.http.get<any>(`http://hp-api.herokuapp.com/api/characters/house/${nombreCasa}`)
  }

  getStudents(){
    return this.http.get<any>(`http://hp-api.herokuapp.com/api/characters/students`)
  }

  getTeachers(){
    return this.http.get<any>(`http://hp-api.herokuapp.com/api/characters/staff`)
  }

  getNewStudents(): Observable<any>{
    return this.newStudents
  }

  setNewStudent(newStudent: any){
    this.newStudents.push(newStudent)
  }
}
