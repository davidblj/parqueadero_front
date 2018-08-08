import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "../../../../node_modules/@angular/common/http";
import { Observable } from "../../../../node_modules/rxjs";

export class BaseUrlInterceptor implements HttpInterceptor {

    baseURL = 'http://localhost:8080/api/1.0/';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any> > {

        const newRequest = req.clone({url: `${this.baseURL}/${req.url}`});
        return next.handle(newRequest);
    }
}
