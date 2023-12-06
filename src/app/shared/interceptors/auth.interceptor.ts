import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: req.headers.set('x-apisports-key', '8438b94d0ed85e2039865ab64591a5c1')
  })
  return next(authReq);
};
