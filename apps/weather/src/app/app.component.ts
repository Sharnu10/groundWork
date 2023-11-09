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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeatherData('Seram');
  }

  //  function to  get weather data for requested city.
  getWeatherData(city: string): void {
    this.http.get(`http://localhost:3030/api/weather/${city}`).subscribe({
      next: (weatherData) => {
        console.log('weatherData ', weatherData);
        this.weatherData = weatherData;
      },
      error: (error) => {
        console.log('error ', error);
      },
    });
  }
}
