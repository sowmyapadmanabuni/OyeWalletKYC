import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { APIService } from '../services/api.service';
import { OTPService } from '../services/otp.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  disableGetINButton: boolean = false;
  mobileNumber: string = "";
  otp: string;
  enable: boolean = false;
  dialCode: string = "";
  mobileNumberWithDialCode = ""

  @ViewChild('get_otp_btn', { static: false }) getOtpBtnRef: ElementRef;
  @ViewChild('countdown_timer', { static: false }) countDownTimerRef: ElementRef;
  constructor(private router: Router, private otpService: OTPService, private authService: AuthService) { }

  ngOnInit() {
  }

  getOTP() {
    console.log("getOTP()")
    this.otpService.getOTP({
      countryCode: this.dialCode,
      mobileNumber: this.mobileNumber
    }).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.disableGetINButton = true;
        this.showToast();
        this.startCountDownTimer();

      }
    }, error => {
      console.log("getOTP()", error)
    })
    // this.startCountDownTimer();
    // this.disableGetINButton = true;
  }
  getIN() { //verify OTP
    console.log("verifyOTP()")
    this.otpService.verifyOTP({
      mobileNumber: this.mobileNumberWithDialCode || `${this.dialCode}${this.mobileNumber}`,
      otpNumber: this.otp
    }).subscribe((res: any) => {
      console.log("verify-res", res)
      if (res && res.data && res.data.account) {
        this.authService.saveToken(res.data.account.acAccntID);
        this.router.navigate(['/home'])
      } else {

      }
    }, error => {
      console.log("getIN()", error)
    })

  }

  resendOTP(e) {
    console.log("resendOTP()")
    e.preventDefault();
    this.otpService.resendOTP({
      CountryCode: this.dialCode,
      MobileNumber: this.mobileNumber,
      OTPnumber: this.otp
    }).subscribe((res: any) => {
      console.log("resend otp=>", res)
    }, error => {
      console.log("resendOTP()", error)
    })

  }

  OTPByCall(e) {
    e.preventDefault();
    this.otpService.OTPByCall({
      dialCode: this.dialCode,
      mobileNumber: this.mobileNumber
    }).subscribe((data) => {
      console.log(data)
    })
  }

  startCountDownTimer() {
    let timeLeft = 30;
    let countdownTimerElement = <HTMLDivElement>this.countDownTimerRef.nativeElement;
    let getOTPBtnElementRef = <HTMLInputElement>this.getOtpBtnRef.nativeElement;

    let timerId = setInterval(() => {

      if (timeLeft == 0) {
        clearInterval(timerId);
        if (getOTPBtnElementRef.value != null) {
          getOTPBtnElementRef.disabled = false;
          getOTPBtnElementRef.value = "Resend";
        }
        // doSomething();
      } else {
        getOTPBtnElementRef.disabled = true;
        countdownTimerElement.innerHTML = timeLeft - 1 + ' seconds to resend';
        countdownTimerElement.style.display = "flex";
        timeLeft--;
        if (timeLeft == 0) {
          clearInterval(timerId);
          if (getOTPBtnElementRef.value != null) {
            getOTPBtnElementRef.disabled = false;
            getOTPBtnElementRef.value = "Resend";
            countdownTimerElement.style.display = "none";
          }
        }
      }
    }, 1000);
  }
  showToast() {
    // let x = document.getElementById("snackbar");
    // x.className = "show";
    // setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  /**
   * ng2-tel-net input handlers
   * 
   */

  telInputObject(telinputobj) {
    this.dialCode = '+' + telinputobj['b'].getAttribute('data-dial-code');
    // console.log(this.dialCode);
    // telinputobj.setCountry('in');
  }
  hasError(errorobj) {
    // console.log(errorobj);
  }

  onCountryChange(countryobj) {
    this.dialCode = countryobj['dialCode']
    console.log(countryobj);
  }

  getNumber(number) {
    console.log("getNumber", number);
    console.log("mobileNumber", this.mobileNumber);
    this.mobileNumberWithDialCode = number;
    // return numberobj;
  }




}
