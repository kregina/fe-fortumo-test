import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SomethingAwesomeService } from "../core/something-awesome/something-awesome.service";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const somethingAwesomeService = jasmine.createSpyObj('SomethingAwesomeService', ['doSomethingAwesome']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: SomethingAwesomeService, useValue: somethingAwesomeService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
