import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { from } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   
  trainingList;
  studentList;
  constructor(private httpClient:HttpClient) { }
   
  ngOnInit(): void {
   this.httpClient.get("http://localhost:8088/trainings")
     .subscribe(data =>{
         this.trainingList = data;
     },err=>{
       console.log(err)
     })
  }

  onGetStudent(f){
    this.httpClient.get("http://localhost:8088/trainings/"+f.id+"/students")
    .subscribe(data =>{
        this.studentList = data;
    },err=>{
      console.log(err)
    })
  }

}
