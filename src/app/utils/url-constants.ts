import { environment } from '../../environments/environment';

export const API_HOST = environment.API_HOST;
export const GET_OTP_URL = `${API_HOST}/wallet/api/v1/generateAndSendOTP`
export const VERIFY_OTP_URL = `${API_HOST}/wallet/api/v1/verifyOTP`
export const RESEND_OTP_URL = "";
export const OTP_BY_CALL = ""; 

// const RESEND_OTP_URL = `${API_HOST}/wallet/api/v1/resendotp`
// const OTP_BY_CALL = `http://control.msg91.com/api/retryotp.php`;

export const GET_ALL_STORES = `${API_HOST}/wallet/api/v1/ListOfStores`
export const GET_LIMITED_STORES = `${API_HOST}/wallet/api/v1/ListOfStoresByPage/{PageNo}`