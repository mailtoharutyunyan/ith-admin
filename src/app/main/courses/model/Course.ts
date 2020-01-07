export class Course {
    courseId: string;
    private _coursePicture: string;
    private _courseName: string;
    private _courseFirstDescription: string;
    private _courseSecondDescription: string;
    levels: [];
    trainers: [];


    constructor(coursePicture: string, courseName: string, courseFirstDescription: string, courseSecondDescription: string) {
        this._coursePicture = coursePicture;
        this._courseName = courseName;
        this._courseFirstDescription = courseFirstDescription;
        this._courseSecondDescription = courseSecondDescription;
    }


    get coursePicture(): string {
        return this._coursePicture;
    }

    set coursePicture(value: string) {
        this._coursePicture = value;
    }

    get courseName(): string {
        return this._courseName;
    }

    set courseName(value: string) {
        this._courseName = value;
    }

    get courseFirstDescription(): string {
        return this._courseFirstDescription;
    }

    set courseFirstDescription(value: string) {
        this._courseFirstDescription = value;
    }

    get courseSecondDescription(): string {
        return this._courseSecondDescription;
    }

    set courseSecondDescription(value: string) {
        this._courseSecondDescription = value;
    }
}
