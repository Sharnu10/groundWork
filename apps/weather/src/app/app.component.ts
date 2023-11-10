import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'groundwork-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather';
  weatherData: any;
  cityName = 'Seram';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  //  function to  get weather data for requested city.
  getWeatherData(): void {
    this.http
      .get(`http://localhost:3030/api/weather/${this.cityName}`)
      .subscribe({
        next: (data: any) => {
          this.weatherData = data.weatherData;
        },
        error: (error) => {
          console.log('error ', error);
        },
      });
  }
}
