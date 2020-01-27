import { Component } from '@angular/core';

@Component({// getTitle() can be used also
    selector: 'courses',
    template: `
         <h2>{{ "Title:" + title }}</h2> 
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    ` 
})
export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3", "course4"];

    getTitle() {
        return this.title;
    }
}