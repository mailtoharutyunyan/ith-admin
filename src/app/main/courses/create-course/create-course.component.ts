import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../service/courses.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
    fileData: File = null;
    previewUrl: any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
    imgURL: string;
    receivedImageData: File;
    courseForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private coursesService: CoursesService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.courseForm = this._formBuilder.group({
            courseName: ['', Validators.required],
            courseDesc1: ['', Validators.required],
            courseDesc2: ['', Validators.required]
        });
    }

    fileProgress(fileInput: any): any {
        this.fileData = fileInput.target.files[0] as File;
        this.preview();
    }

    preview(): void {
        console.log('Uploaded');
        // Show preview
        const mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.previewUrl = reader.result;
        };
    }

    onSubmit(): any {
        const formData = new FormData();
        formData.append('file', this.fileData);
        // this.http.post('url/to/your/api', formData)
        //     .subscribe(res => {
        //         console.log(res);
        //         this.uploadedFilePath = res.data.filePath;
        //         alert('SUCCESS !!');
        //     });
        console.log(this.fileData.name);
        console.log(this.courseForm.get('courseName').value);
        console.log(this.courseForm.get('courseDesc1').value);
        console.log(this.courseForm.get('courseDesc2').value);

        /* this.coursesService.createCourse(new Course(
             this.fileData.name,
             this.courseForm.get('courseName').value,
             this.courseForm.get('courseDesc1').value,
             this.courseForm.get('courseDesc2').value,
         ));*/
        if (this.fileData.name) {
            this.coursesService.createCourse(
                this.courseForm.get('courseName').value,
                this.fileData.name,
                this.courseForm.get('courseDesc1').value,
                this.courseForm.get('courseDesc2').value,
            ).subscribe(res => {
                console.log(res);
            });

            this.router.navigate(['/courses']);

        }

    }

    onUpload($event: Event): void {
        console.log('Uploaded');
    }

    onFileChanged($event: Event): void {

    }
}
