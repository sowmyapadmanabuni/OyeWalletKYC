import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  store(key: string, data: any) {
    localStorage.setItem(key, this.convertDataToString(data));
  }
  clearAll() {
    localStorage.clear();
  }
  get(key: string) {
    localStorage.getItem(key)
  }
  delete(key: string) {
    localStorage.removeItem(key)
  }

  private convertDataToString(data: any) {
    let value = "";
    if (typeof (data) == "object") {
      value = JSON.stringify(data)
    } else if (typeof (data) == "number") {
      value = data.toString();
    } else {
      value = data;
    }
    return value;
  }
}
