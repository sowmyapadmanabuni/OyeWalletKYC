import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_HOST = environment.API_HOST;
const GET_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/sendotp`
const VERIFY_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/verifyotp`
const RESEND_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/resendotp`


export abstract class APIService {

  constructor(private http: HttpClient) { }

  getHttpheaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'my-auth-token',
        'X-Champ-APIKey': '1FDF86AF-94D7-4EA9-8800-5FBCCFF8E5C1',
        'Content-Type': 'application/json'
      })
    };
  }

  create(URL: string, data: any) {
    return this.http.post(URL, data, this.getHttpheaders())
  }

  get(URL: string, params?: HttpParams | {
    [param: string]: string | string[];
  }) {
    let options: any = this.getHttpheaders();
    options.params = params||{};
    return this.http.get(URL, options)
  }

  delete(URL: string, data: any) {
    return this.http.delete(URL, this.getHttpheaders())
  }

  update(URL: string, data: any) {
    return this.http.put(URL, data, this.getHttpheaders())
  }

}
