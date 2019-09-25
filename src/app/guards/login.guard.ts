import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router){

  }
  
  canActivate(): Promise<boolean> {
return new Promise(resolve =>{
this.authService.getAuth().onAuthStateChanged(user =>{
  // tslint:disable-next-line: curly
  if (user) this.router.navigate(['pagina-inicial']);

  // tslint:disable-next-line: semicolon
  resolve(!user ? true : false)
// tslint:disable-next-line: semicolon
})
});
  }
  }

