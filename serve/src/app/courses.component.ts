import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({// getTitle() can be used also
    selector: 'courses',
    template: `
         <h2>{{ title }}</h2> 
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <button class="btn btn-primary">Press Button</button>
    ` 
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}