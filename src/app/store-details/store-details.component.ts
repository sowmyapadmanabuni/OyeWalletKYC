import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  storeStatus:string = "Approved"
  constructor() { }

  ngOnInit() {
  }
  CheckAllOptions(event) {
    // if (this.checkboxes.every(val => val.checked == true))
    //   this.checkboxes.forEach(val => { val.checked = false });
    // else
    //   this.checkboxes.forEach(val => { val.checked = true });
  }
  checkOption(event){

  }

}
