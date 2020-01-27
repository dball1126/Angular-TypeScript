import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({// getTitle() can be used also
    selector: 'courses',
    template: `
        {{ course.title | uppercase | lowercase}} <br />
        {{ course.students | number }} <br />
        {{ course.rating | number:'1.2-2' }} <br />
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br />
        {{ course.releaseDate | date:'shortDate' }} <br />
    ` 
//     <h2>{{ title }}</h2> 
//    <ul>
//        <li *ngFor="let course of courses">
//            {{ course }}
//        </li>
//    </ul>
//    <img [src]="imageUrl" />
//    <button class="btn btn-primary" [class.active]="isActive">Press Button</button>
})
export class CoursesComponent {
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        prices: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }

    // getTitle() {
    //     return this.title;
    // }
}