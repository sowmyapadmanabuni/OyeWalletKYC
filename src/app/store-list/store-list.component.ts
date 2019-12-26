import { Component, OnInit } from '@angular/core';
import { DataAPIService } from '../services/dataapi.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  storesList: any;
  filterList: Array<string> = ['Approved', 'Pending', 'Rejected'];
  filteredStoreList: any;
  status: boolean = true;
  pstatus: boolean = true;
  astatus: boolean = true;
  rstatus: boolean = true;

  constructor(private dataAPIService: DataAPIService,
    private router: Router) { }

  ngOnInit() {
    // this.dataAPIService.getStoreList(1).subscribe(res=>{

    // })
    this.dataAPIService.getAllStoreList().subscribe((res: any) => {
      if (res) {

        // let testArray = [];
        // for (let i = 0; i < 20; i++) {
        //   let testObj = {
        //     storeDetailsID: i + 1,
        //     brandName: 'test',
        //     registrationName: i > 7 ? (i > 14 ? 'test' : 'abcd') : 'pqrs',
        //     registration: { storeStatus: i > 7 ? (i > 14 ? 'Pending' : 'Approved') : 'Rejected' }
        //   };
        //   testArray.push(testObj);
        // }
        // this.storesList = testArray;

        this.storesList = res;
        this.filteredStoreList = this.storesList;
      }
    }, error => {
      console.log("Error", error)
    })
  }

  gotoStoreDetails(store) {
    console.log("store info", store)

    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "firstname": "Nic",
    //     "lastname": "Raboy"
    //   }
    // };
    // this.router.navigate(['home', store.id], navigationExtras);
    this.router.navigate(['home', store.id], {
      state: { example: store }
    });
  }
  groupBy(e, filter, status) {

    if (filter == 'All' && status) {
      this.filterList = ['Approved', 'Pending', 'Rejected']
    } else if (filter == 'All' && !status) {
      this.filterList = []
      this.filteredStoreList = []; return;
    } else if (filter != 'All' && status) {
      this.filterList.push(filter);
    } else {
      this.filterList = this.filterList.filter(item => item != filter);
    }

    if (this.filterList.length) {
      this.filteredStoreList = this.storesList.filter(item => {
        return this.filterList.includes(item.registration.storeStatus)
      })
    } else {
      this.filteredStoreList = [];
    }
  }
}
