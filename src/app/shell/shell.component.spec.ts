import { fakeAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShellComponent } from "./shell.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

describe("ShellComponent", () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ShellComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      fixture = TestBed.createComponent(ShellComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
