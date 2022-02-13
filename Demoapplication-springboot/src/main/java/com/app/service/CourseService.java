package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CourseRepository;
import com.app.model.Course;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository courseRepo;
	
	public Course saveCourse(Course course) {
		return courseRepo.save(course);
	}
	
	public Course updateCourse(Course course) {
		return courseRepo.save(course);
	}
	
	public List<Course> findAllCourses() {
		return courseRepo.findAll();
	}
	
	public Course findCourseById(int cid) {
		return courseRepo.findById(cid).get();
	}
	
	public void deleteCourse(int cid) {
		courseRepo.deleteById(cid);
	}
}
