import { Component, OnInit } from '@angular/core';
import { PlanetaryService } from '../services/planetary/planetary.service';
import { Apod } from '../shared/models/apod.model';

@Component({
  selector: 'app-picture-of-the-day',
  templateUrl: './picture-of-the-day.component.html',
  styleUrls: ['./picture-of-the-day.component.scss']
})
export class PictureOfTheDayComponent implements OnInit {
  AstronomyPicturesForSevenDays: Apod[];
  error: any;

  constructor(private planetaryService: PlanetaryService) { }

  ngOnInit(): void {
    this.getPicturesOfPastSevenDays();
  }

  getPicturesOfPastSevenDays() {
    this.planetaryService.getAstronomyPictureOfDayByDays(7)
      .subscribe((data: Apod[]) => this.AstronomyPicturesForSevenDays = data,
        error => this.error = error);
  }

}
