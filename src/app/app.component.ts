import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PropertyCross';

  constructor(private router: Router) { }

  private goHome(): void {
    this.router.navigate(['/search']);
  }
}

