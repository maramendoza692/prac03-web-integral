import { CanActivate, CanActivateFn } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';
export class CheckLoginGuard implements CanActivate {
  
  constructor(
    private authService: AuthService
  ){}

  canActivate(): Observable<boolean>{
    return this.authService.token$.pipe(
      take(1),
      map(token => (token == "" ? true : false))
    )
  }

  
}

