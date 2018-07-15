import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { expand } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { SomethingAwesome } from "./something-awesome";
import { empty } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SomethingAwesomeService {
  constructor(private http: HttpClient, private router: Router) {}

  doSomethingAwesome() {
    return this.http.get<SomethingAwesome>(`${environment.api}/xhr_endpoint`).pipe(
      expand(response => {
        console.log(response);
        switch (response.activity) {
          case "xhr":
            return this.http.get<SomethingAwesome>(response.activity_url);
          case "redirect":
            this.router.navigateByUrl(response.activity_url);
            return empty();
        }
      })
    );
  }
}
