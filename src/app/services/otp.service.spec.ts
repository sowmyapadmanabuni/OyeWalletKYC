import { TestBed } from '@angular/core/testing';

import { OTPService } from './otp.service';

describe('OtpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OTPService = TestBed.get(OTPService);
    expect(service).toBeTruthy();
  });
});
