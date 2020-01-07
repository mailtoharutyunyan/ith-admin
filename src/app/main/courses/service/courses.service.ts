import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    baseUrl = 'http://192.168.1.12:4444';

    constructor(private httpClient: HttpClient) {
    }


    getAllCourses(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/api/courses`);
    }
}
