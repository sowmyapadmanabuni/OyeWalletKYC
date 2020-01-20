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
  timerId;
  notificationMessageToggle: boolean;

  @ViewChild('get_otp_btn', { static: false }) getOtpBtnRef: ElementRef;
  @ViewChild('countdown_timer', { static: false }) countDownTimerRef: ElementRef;
  @ViewChild('notification_message_container', { static: false }) notificationMsgContainerRef: ElementRef;

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
        this.showNotificationMessage("OTP has been sent", 'info')
      }
    }, error => {
      console.log("getOTP()", error)
    })
    // this.startCountDownTimer();
    // this.disableGetINButton = true;
    // this.showNotificationMessage("OTP has been sent", 'info')
  }
  getIN() { //verify OTP
    console.log("verifyOTP()")
    this.stopCountDownTimer();
    this.disableGetINButton = false;
    this.otpService.verifyOTP({
      mobileNumber: this.mobileNumberWithDialCode || `${this.dialCode}${this.mobileNumber}`,
      otpNumber: this.otp
    }).subscribe((res: any) => {
      console.log("verify-res", res)
      // if (res && res.success && res.data && res.data.account) {
      if (res && res.success) {
        this.authService.saveToken("true");
        this.router.navigate(['/stores'])
      } else {
        let notificationMessage = res && !res.success && res.data ? res.data.errorMessage : "Something failed"
        this.showNotificationMessage(notificationMessage, 'error')

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

  showNotificationMessage(message, messageType) {
    let messageDivRef = <HTMLDivElement>this.notificationMsgContainerRef.nativeElement;
    messageDivRef.innerHTML = message;
    messageDivRef.style.display = "flex";
    if (messageType == 'info') {
      this.notificationMessageToggle = true;
      setTimeout(() => { this.hideNotificationMessage() }, 3000)
    } else if (messageType == 'error') {
      this.notificationMessageToggle = false;
    }
  }
  hideNotificationMessage() {
    let messageDivRef = <HTMLDivElement>this.notificationMsgContainerRef.nativeElement;
    messageDivRef.style.display = "none";
  }
  startCountDownTimer() {
    let timeLeft = 30;
    let countdownTimerElement = <HTMLDivElement>this.countDownTimerRef.nativeElement;
    let getOTPBtnElementRef = <HTMLInputElement>this.getOtpBtnRef.nativeElement;

    this.timerId = setInterval(() => {

      if (timeLeft == 0) {
        clearInterval(this.timerId);
        if (getOTPBtnElementRef.value != null) {
          getOTPBtnElementRef.disabled = false;
          getOTPBtnElementRef.value = "Resend";
        }
        // doSomething();
      } else {
        getOTPBtnElementRef.disabled = true;
        countdownTimerElement.innerHTML = `Resend in ${timeLeft - 1} secs`;
        countdownTimerElement.style.display = "flex";
        timeLeft--;
        if (timeLeft == 0) {
          clearInterval(this.timerId);
          if (getOTPBtnElementRef.value != null) {
            getOTPBtnElementRef.disabled = false;
            getOTPBtnElementRef.value = "Resend";
            countdownTimerElement.style.display = "none";
          }
        }
      }
    }, 1000);
  }

  stopCountDownTimer() {
    clearInterval(this.timerId);
    let countdownTimerElement = <HTMLDivElement>this.countDownTimerRef.nativeElement;
    countdownTimerElement.style.display = "none";
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
