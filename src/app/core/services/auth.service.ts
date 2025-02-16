import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  public sign(payload: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.url}/sign`, payload).pipe(
      map((res) => {
        return console.log(res);
      }),
      catchError((err) => {
        if (err.error.message) return throwError(() => err.error.message);

        return throwError(
          () =>
            "No momento não estamos conseguindo validar estes dados, tente novamente  mais tarde!"
        );
      })
    );
  }
}
