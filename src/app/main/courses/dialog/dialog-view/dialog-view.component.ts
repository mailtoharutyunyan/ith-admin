import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dialog-view',
    templateUrl: './dialog-view.component.html',
    styleUrls: ['./dialog-view.component.scss']
})
export class DialogViewComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: 'DialogData') {
    }

    ngOnInit(): void {
    }

}
