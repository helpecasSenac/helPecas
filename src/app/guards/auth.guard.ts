import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { promise } from 'protractor';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router){

  }
  
  canActivate(): Promise<boolean> {
return new Promise(resolve =>{
this.authService.getAuth().onAuthStateChanged(user =>{
  if (!user) this.router.navigate(['login']);

  resolve(user ? true : false)
})
});
  }
  }