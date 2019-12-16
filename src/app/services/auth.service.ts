import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { AUTH_TOKEN } from '../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private storageService: StorageService) { }
  isAuthenticated() {
    // return this.getToken() != undefined && this.getToken() != null;
    return true;
    // Check whether the token is expired and return
    // true or false if it is a jwt token 
    // import { JwtHelperService } from '@auth0/angular-jwt';
    // constructor(public jwtHelper: JwtHelperService) {}
    // return !this.jwtHelper.isTokenExpired(token);
  }

  saveToken(data: any) {
    this.storageService.store(AUTH_TOKEN, data);
  }

  getToken() {
    return this.storageService.get(AUTH_TOKEN);
  }

  deleteToken() {
    this.storageService.delete(AUTH_TOKEN);
  }

}
