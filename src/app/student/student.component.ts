import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   
  listFormations;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/training/")
       .subscribe(data =>{
         this.listFormations = data;
       },err=>{
         console.log(err);
       })
  }

}
