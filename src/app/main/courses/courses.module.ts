import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { LoginComponent } from '../auth/login/login.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { AuthGuard } from '../auth/helpers/auth-guard';
import { CreateCourseComponent } from './create-course/create-course.component';


const routes = [
    {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'courses/create',
        component: CreateCourseComponent,
        canActivate: [AuthGuard]
    }

];

@NgModule({
    declarations: [CoursesComponent, CreateCourseComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
        MatCardModule,
        MatSelectModule
    ]
})
export class CoursesModule {
}
