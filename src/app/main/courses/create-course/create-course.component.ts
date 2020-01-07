import { Component, OnInit } from '@angular/core';

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

    constructor() {
    }

    ngOnInit(): void {
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
    }

    onUpload($event: Event): void {
        console.log('Uploaded');
    }

    onFileChanged($event: Event) {

    }
}
