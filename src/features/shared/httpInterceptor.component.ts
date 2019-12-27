import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
      constructor(private router: Router) {}
      intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
            }
            return event;
          }),
            catchError((error: HttpErrorResponse) => {
              console.log(error);
              if (error.status === 404){
                this.router.navigate(['/404']);
              } else if(error.status === 403) {
                this.router.navigate(['/403']);
              } else {
                this.router.navigate(['/500']);
              }
              return Observable.throw(error);
            }));
      }
}
