import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-Ng-Prime-Ts';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
}
