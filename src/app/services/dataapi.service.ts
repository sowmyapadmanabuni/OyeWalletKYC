import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { GET_LIMITED_STORES, GET_ALL_STORES, UPDATE_STORE_STATUS } from '../utils/url-constants';

@Injectable({
  providedIn: 'root'
})
export class DataAPIService extends APIService {

  constructor(http: HttpClient) {
    super(http);
  }

  getStoreList(pageNo) {
    return this.get(GET_LIMITED_STORES.replace('{PageNo}', pageNo))
  }
  getAllStoreList() {
    return this.get(GET_ALL_STORES)
  }
  submitStoreStatus(storeId, data) {
    console.log("submitStoreStatus",storeId, data)
    return this.update(UPDATE_STORE_STATUS.replace('{storeID}', storeId), data)
  }
}
