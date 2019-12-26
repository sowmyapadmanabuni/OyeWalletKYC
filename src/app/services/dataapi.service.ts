import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { GET_LIMITED_STORES, GET_ALL_STORES } from '../utils/url-constants';

@Injectable({
  providedIn: 'root'
})
export class DataAPIService extends APIService{

  constructor(http: HttpClient) {
    super(http);
  }

  getStoreList(pageNo){
    return this.get(GET_LIMITED_STORES.replace('{PageNo}', pageNo))
  }
  getAllStoreList(){
    return this.get(GET_ALL_STORES)
  }
}
