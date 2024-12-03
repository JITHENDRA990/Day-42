import { Component } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  records:Student[]=[]
  constructor(private service:StudentService){
  }
  ngOnInit():void{
   this.getrecords();
  }
getrecords():void{
  this.service.getall().subscribe(data=>this.records=data)
}
}
