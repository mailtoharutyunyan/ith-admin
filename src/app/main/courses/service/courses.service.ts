import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    baseUrl = 'http://localhost:4444';
    private _refreshNeeded = new Subject<void>();


    get refreshNeeded(): Subject<void> {
        return this._refreshNeeded;
    }

    constructor(private httpClient: HttpClient) {
    }

    getAllCourses(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/api/courses`);
    }

    createCourse(courseName: string, coursePicture: string, courseFirstDescription: string, courseSecondDescription: string): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}/api/courses`, {
            courseName,
            coursePicture,
            courseFirstDescription,
            courseSecondDescription
        }).pipe(
            tap(() => this._refreshNeeded.next())
        );

    }
}
