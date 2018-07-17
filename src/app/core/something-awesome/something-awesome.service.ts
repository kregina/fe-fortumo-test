import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { expand } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { SomethingAwesome } from "./something-awesome";
import { empty, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SomethingAwesomeService {
  constructor(private http: HttpClient, private router: Router) {}

  doSomethingAwesome() {
    const firstRequestUrl = `${environment.api}/first_endpoint`;

    return this.http
      .get<SomethingAwesome>(firstRequestUrl)
      .pipe(expand(response => this.handleResponse(response)));
  }

  private handleResponse(response): Observable<SomethingAwesome> {
    switch (response.activity) {
      case "xhr":
        return this.http.get<SomethingAwesome>(response.activity_url);
      case "redirect":
        this.router
          .navigate([response.activity_url])
          .catch(() => ('Redirect error'));
        return empty();
    }
  }
}
