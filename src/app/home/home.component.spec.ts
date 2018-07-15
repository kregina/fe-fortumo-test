import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SomethingAwesomeService } from "../core/something-awesome/something-awesome.service";
import { of } from "rxjs";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let somethingAwesomeService;

  beforeEach(async(() => {
    somethingAwesomeService = jasmine.createSpyObj('SomethingAwesomeService', ['doSomethingAwesome']);

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

  it("should do Something Awesome", () => {
    //arrange -> initialize objects and set values of the data
    somethingAwesomeService.doSomethingAwesome.and.returnValue(of(true));
    //act -> invokes the method under the test
    component.doSomethingAwesome();
    //assert -> verifies that the action of the methid under test behaves as expected
    expect(component.loading$).toBeTruthy();
  });
});
