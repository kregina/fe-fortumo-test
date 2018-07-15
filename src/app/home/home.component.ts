import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SomethingAwesome } from '../core/something-awesome/something-awesome';
import { SomethingAwesomeService } from '../core/something-awesome/something-awesome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loading$: Observable<SomethingAwesome>;

  constructor(private service: SomethingAwesomeService) { }

  doSomethingAwesome() {
    this.loading$ = this.service.doSomethingAwesome();
  }

}
