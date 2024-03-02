import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sales-app',
  standalone: true,
  imports: [RouterOutlet],
  template: `
      <div class="md:container md-mx-auto bg-gray-50 ">
        <div class="h-screen flex items-center justify-center flex-col">
          <h1 class="text-red-600 ">Hello, {{ title }}</h1>
          <p>Congratulations! Your app is running. 🎉</p>
        </div>

      </div>


    <router-outlet />`
})
export class AppComponent {
  title = 'Store Manager App';
}
