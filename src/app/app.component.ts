import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
