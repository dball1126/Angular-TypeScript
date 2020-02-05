import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  year: number;
  month: number;


  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.year = +params.get('year'); //the + Gets rid of the compilation error
    this.month = +params.get('month'); //the + Gets rid of the compilation error

  }

  viewAll(){
    this.router.navigate(['/'])
  } 

}
