import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-california',
  templateUrl: './california.component.html',
  styleUrls: ['./california.component.css', '../../app.component.css']
})
export class CaliforniaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state = "California"
}
