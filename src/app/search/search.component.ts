import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherComponent } from '../weather/weather.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [CommonModule,WeatherComponent],
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  onSearch() {
    if (!this.city) return;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        console.log('天気情報:', data);
        this.weatherData = data;
      },
      error: (err) => {
        console.error('天気取得に失敗:', err);
        this.weatherData = null;
        alert('天気情報の取得に失敗しました。都市名を確認してください。');
      }
    });
  }
}
