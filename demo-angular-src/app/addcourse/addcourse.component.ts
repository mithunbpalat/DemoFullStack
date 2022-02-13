import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Course } from '../gcourse';
import { Search } from '../gsearch';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course: any= new Course(0,"","");
  courses: any;
  search : any = new Search(0)
  constructor(private service : DemoService) { }

  ngOnInit(): void {
    let resp = this.service.getCourses();
    resp.subscribe((data)=>this.courses=data);
  }

  public courseNow(){
    let resp = this.service.postCourse(this.course);
    resp.subscribe((data)=>this.courses=data);
  }

  public updateCourseNow(){
    let resp = this.service.updateCourse(this.course);
    resp.subscribe((data)=>this.courses=data);
  }

  public searchById(a:number){
    let resp = this.service.getCourseById(a);
    resp.subscribe((data)=>this.course=data);
  }

  public delCourse(a: number){
    let resp = this.service.deleteCourse(a);
    resp.subscribe((data)=>this.courses=data);
  }
}
