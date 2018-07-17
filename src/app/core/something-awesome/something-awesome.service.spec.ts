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
  let service: SomethingAwesomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [SomethingAwesomeService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(SomethingAwesomeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return do Something Awesome", () => {
    const firstResponse = {
      activity: "xhr",
      activity_url: "http://localhost:3000/last_endpoint"
    };

    const lastResponse = {
      activity: "redirect",
      activity_url: "landing-page"
    };

    const responses = [];
    service.doSomethingAwesome().subscribe((response) => {
      responses.push(response);
    });

    const req1 = httpTestingController.expectOne(
      "http://localhost:3000/first_endpoint"
    );

    req1.flush(firstResponse);

    const req2 = httpTestingController.expectOne(
      "http://localhost:3000/last_endpoint"
    );

    req2.flush(lastResponse);

    expect(responses[0]).toBe(firstResponse);
    expect(responses[1]).toBe(lastResponse);

    httpTestingController.verify();
  });
});
