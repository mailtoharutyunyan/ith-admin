import { Component, OnInit } from '@angular/core';
import { CoursesService } from './service/courses.service';
import { Course } from './model/Course';
import { Router } from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses: Course[];


    constructor(private coursesService: CoursesService,
                private router: Router
    ) {
    }

    ngOnInit(): void {
        this.onCourseLoad();
        this.courses = new Array<Course>();
        this.courses.forEach(res => {
            console.log(res.courseName);
        });
    }

    onCourseLoad(): any {
        this.coursesService.getAllCourses().subscribe((res: any) => {
            this.courses = res;
        });
    }

    createCourse(): void {
        this.router.navigate(['courses/create']).catch((err) => console.log(err));
    }
}
