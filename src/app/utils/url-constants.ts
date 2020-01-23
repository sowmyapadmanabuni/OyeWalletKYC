import { environment } from '../../environments/environment';

export const API_HOST = environment.API_HOST;
export const MEDIA_HOST =  environment.MEDIA_HOST;

export const GET_OTP_URL = `${API_HOST}/wallet/api/v1/generateAndSendOTP`
export const VERIFY_OTP_URL = `${API_HOST}/wallet/api/v1/verifyOTP`
export const RESEND_OTP_URL = "";
export const OTP_BY_CALL = ""; 

// const RESEND_OTP_URL = `${API_HOST}/wallet/api/v1/resendotp`
// const OTP_BY_CALL = `http://control.msg91.com/api/retryotp.php`;

export const GET_ALL_STORES = `${API_HOST}/wallet/api/v1/ListOfStores`
export const GET_LIMITED_STORES = `${API_HOST}/wallet/api/v1/ListOfStoresByPage/{PageNo}`
export const UPDATE_STORE_STATUS = `${API_HOST}/wallet/api/v1/StoreStatusUpdate/{storeID}`


export const MEDIA_UPLOAD_URL = `${MEDIA_HOST}/oyeliving/api/V1/association/upload`
export const MEDIA_LOCATION_URL = `${MEDIA_HOST}/Images/{imageName}`