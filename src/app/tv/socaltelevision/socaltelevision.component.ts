import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socaltelevision',
  templateUrl: './socaltelevision.component.html',
  styleUrls: ['./socaltelevision.component.css']
})
export class SocaltelevisionComponent implements OnInit {

  constructor(private router: Router) {}

  videoEnd() {
    // do init at here for current route.
    console.log('videoEnd function fired.');
    setTimeout(() => {
      console.log('fired inside setTimeout function.');
      this.router.navigate(['ad1']);
      console.log('Should have redirected by now.');
  }, );  // ,1000 1s
  }

  ngOnInit() {
  }

  stationName = " SoCalTelevision"
}
