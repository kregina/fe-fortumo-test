import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { TestBed, inject } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { SomethingAwesomeService } from "./something-awesome.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("SomethingAwesomeService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'landing-page', loadChildren: './landing-page/landing-page.module#LandingPageModule' }
        ])
      ],
      providers: [SomethingAwesomeService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("should be created", inject(
    [SomethingAwesomeService],
    (service: SomethingAwesomeService) => {
      expect(service).toBeTruthy();
    }
  ));
});
