import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_HOST = environment.API_HOST;
const GET_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/sendotp`
const VERIFY_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/verifyotp`
const RESEND_OTP_URL = `${API_HOST}/oyeliving/api/v1/account/resendotp`
const OTP_BY_CALL = `http://control.msg91.com/api/retryotp.php`;


@Injectable({
  providedIn: 'root'
})
export class OTPService extends APIService {

  constructor(http: HttpClient) {
    super(http);
  }

  getOTP(mobileConfigs: any) {
    return this.create(GET_OTP_URL, mobileConfigs)
  }

  verifyOTP(otpInfo: any) {
    return this.create(VERIFY_OTP_URL, otpInfo)
  }
  resendOTP(mobileConfigs: any) {
    return this.create(RESEND_OTP_URL, mobileConfigs)
  }
  OTPByCall(mobileConfigs: any) {
    console.log("OTPByCall", mobileConfigs)
    let params = {
      mobile: `${mobileConfigs.dialCode}${mobileConfigs.mobileNumber}`,
      authkey: "261622AtznpKYJ5c5ab60e",
      retrytype: "voice"
    }
    return this.get(OTP_BY_CALL, params)

  }
}
