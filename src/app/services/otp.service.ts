import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import {GET_OTP_URL, VERIFY_OTP_URL, RESEND_OTP_URL, OTP_BY_CALL} from '../utils/url-constants'


@Injectable({
  providedIn: 'root'
})
export class OTPService extends APIService {

  constructor(http: HttpClient) {
    super(http);
  }

  getOTP(mobileConfigs: any) {
    return this.create(GET_OTP_URL, mobileConfigs, true)
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
