import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from './service/courses.service';
import { Course } from './model/Course';
import { Router } from '@angular/router';
import { DialogViewComponent } from './dialog/dialog-view/dialog-view.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses: Course[];
    @Input() id: string;

    constructor(private coursesService: CoursesService,
                private router: Router,
                public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.coursesService.refreshNeeded.subscribe(
            (() => {
                this.onCourseLoad();
            })
        );
        this.onCourseLoad();
        this.courses = new Array<Course>();
        console.log('OnInit');
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


    onEdit(id: string): void {
        console.log(id);
    }

    onDelete(id: string): void {
        console.log(id);
    }

    openDialog(): void {
        this.dialog.open(DialogViewComponent);
    }
}
