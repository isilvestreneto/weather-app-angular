import { Component, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
    <div class="flex-container">
      <div id="logo">
        <img src="assets/images/logo.svg" alt="logo" />
      </div>
      <div id="select">
        <select >
            <option>
                Units
            </option>
          Units Switch to Imperial/Metric Temperature Celsius (°C) Fahrenheit (°F) Wind Speed km/h
          mph Precipitation Millimeters (mm) Inches (in)
        </select>
      </div>
    </div>
  `,
  styleUrl: './navbar.scss',
})
export class Navbar {
  units = input.required<'metric' | 'imperial'>();
}
