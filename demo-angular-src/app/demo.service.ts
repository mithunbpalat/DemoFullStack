import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './gcourse';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }


  public postCourse(course : Course){
    return this.http.post("http://localhost:8083/postcourse",course,{responseType: 'text' as 'json'});
  }

  public updateCourse(course : Course){
    return this.http.put("http://localhost:8083/updatecourse",course,{responseType: 'text' as 'json'});
  }

  public getCourses(){
    return this.http.get("http://localhost:8083/getallcourses");
  }

  public getCourseById(a: number){
    return this.http.get("http://localhost:8083/getcoursebyid?cid="+a);
  }

  public deleteCourse(a: number){
    return this.http.delete("http://localhost:8083/deletecourse?cid="+a);
  }
}
