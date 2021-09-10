import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NewStudentComponent } from './components/students/new-student/new-student.component';
import { AllNewStudentsComponent } from './components/students/all-new-students/all-new-students.component';

const routes: Routes = [
  	{ 
    	path: '', 
    	component: HomeComponent,
  	},
	{ 
    	path: 'characters', 
    	component: CharactersComponent,
  	},
	{ 
    	path: 'characters/datatable', 
    	component: DatatableComponent,
  	},
	{ 
    	path: 'students', 
    	component: StudentsComponent,
  	},	  
	{ 
    	path: 'students/new', 
    	component: NewStudentComponent,
  	},	  
	{ 
    	path: 'all-new-students', 
    	component: AllNewStudentsComponent,
  	},
	{ 
    	path: 'teachers', 
    	component: TeachersComponent,
  	},
];

@NgModule({
  	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }