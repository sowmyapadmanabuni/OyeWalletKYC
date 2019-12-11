
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { environment } from '../../environments/environment';

// const API_HOST = environment.API_HOST;
// const GET_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/sendotp`
// const VERIFY_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/verifyotp`
// const RESEND_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/resendotp`


export abstract class APIService {

  constructor(private http: HttpClient) { }

  getHttpheaders() {
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    // return {headers:headers}
    
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  create(URL: string, data: any, addHeader?: boolean) {
    return addHeader ? this.http.post(URL, data, this.getHttpheaders()) : this.http.post(URL, data)
  }

  get(URL: string, params?: HttpParams | {
    [param: string]: string | string[];
  }, addHeader?: boolean) {
    let options: any = addHeader ? this.getHttpheaders() : {};
    options.params = params || {};
    return this.http.get(URL, options)
  }

  delete(URL: string, addHeader?: boolean) {
    return addHeader ? this.http.delete(URL, this.getHttpheaders()) : this.http.delete(URL)
  }

  update(URL: string, data: any, addHeader?: boolean) {
    return addHeader ? this.http.put(URL, data, this.getHttpheaders()) : this.http.put(URL, data)
  }

}
