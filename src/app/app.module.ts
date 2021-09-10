import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { DataTablesModule } from "angular-datatables";
import { DatatableComponent } from './components/datatable/datatable.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NewStudentComponent } from './components/students/new-student/new-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllNewStudentsComponent } from './components/students/all-new-students/all-new-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    DatatableComponent,
    StudentsComponent,
    TeachersComponent,
    NewStudentComponent,
    AllNewStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
