import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  storeDetails: any;
  isPanApproved: boolean;
  isAadharApproved: boolean;
  isAddressApproved: boolean;
  isBankDetailsApproved: boolean;
  isChequeDetailsApproved: boolean;

  showPanStatus:boolean;
  showAadharStatus: boolean;
  showAddressStatus: boolean;
  showBankDetailStatus: boolean;
  showChequeDetailStatus: boolean;

  documentList: any = []
  testImageUrl_1: string;
  testImageUrl_2: string;
  testImageUrl_3: string;
  storeStatus: string = "Approved";
  private _albums: Array<any> = [];
  private state$: Observable<object>;


  constructor(private _lightbox: Lightbox, public router: Router, public activatedRoute: ActivatedRoute, private location: Location) {
    // for (let i = 1; i <= 4; i++) {
    //   const src = 'demo/img/image' + i + '.jpg';
    //   const caption = 'Image ' + i + ' caption here';
    //   const thumb = 'demo/img/image' + i + '-thumb.jpg';
    //   const album = {
    //     src: src,
    //     caption: caption,
    //     thumb: thumb
    //   };

    //   this._albums.push(album);
    // }
    const album = {
      src: `https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=abandoned-forest-industry-nature-34950.jpg&fm=jpg`,
      caption: "Pan",
      thumb: this.testImageUrl_1
    };
    console.log("album", album)
    this._albums.push(album);
  }



  ngOnInit() {

    this.getStoreDetails();

    // for (let i = 0; i < 5; i++) {
    //   let testObj = {
    //     documentType: 'PAN'
    //   }
    //   this.documentList.push(testObj)
    // }
  }
  CheckAllOptions(event) {
    // if (this.checkboxes.every(val => val.checked == true))
    //   this.checkboxes.forEach(val => { val.checked = false });
    // else
    //   this.checkboxes.forEach(val => { val.checked = true });
  }
  checkOption(event) {

  }
  open(index: number = 0): void {
    // open lightbox
    // this._lightbox.open(this._albums, index);

    this._lightbox.open(this._albums, 0);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  getStoreDetails() {
    // const id = +this.route.snapshot.paramMap.get('id');

    // this.state$ =  this.router.events.pipe(
    //   filter(e => e instanceof NavigationStart),
    //   map(() => this.router.getCurrentNavigation().extras.state))

    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))

    this.state$.subscribe(data => {
      console.log("data", data)
      this.storeDetails = data;
      this.storeStatus = this.storeDetails.registration ?(' '+this.storeDetails.registration.storeStatus) : ' None';
      // this.testImageUrl = `http://mediauploaddev.oyespace.com/Images/${this.storeDetails.panDetails.panIDFront}`
      // this.testImageUrl_1 = `http://mediauploaddev.oyespace.com/Images/1554868484472.jpg`
      this.testImageUrl_2 = `http://mediauploaddev.oyespace.com/Images/1554867360418.jpg`
      this.testImageUrl_3 = `http://mediauploaddev.oyespace.com/Images/1554820898644.jpg`
      this.testImageUrl_1 = `https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=abandoned-forest-industry-nature-34950.jpg&fm=jpg`
    })

  }

  reject(btnType: string) {
    if (btnType.includes('pan')) {
      this.showPanStatus = true;
      this.isPanApproved = false;
    } else if (btnType.includes('address')) {
      this.showAddressStatus = true;
      this.isAddressApproved = false;
    } else if (btnType.includes('aadhar')) {
      this.showAadharStatus = true;
      this.isAadharApproved = false;
    } else if (btnType.includes('bank')) {
      this.showBankDetailStatus = true;
      this.isBankDetailsApproved = false;
    } else if (btnType.includes('cheque')) {
      this.showChequeDetailStatus = true;
      this.isChequeDetailsApproved = false;
    }
  }
  approve(btnType: string) {
    if (btnType.includes('pan')) {
      this.showPanStatus = true;
      this.isPanApproved = true;
    } else if (btnType.includes('address')) {
      this.showAddressStatus = true;
      this.isAddressApproved = true;
    } else if (btnType.includes('aadhar')) {
      this.showAadharStatus = true;
      this.isAadharApproved = true;
    } else if (btnType.includes('bank')) {
      this.showBankDetailStatus = true;
      this.isBankDetailsApproved = true;
    } else if (btnType.includes('cheque')) {
      this.showChequeDetailStatus = true;
      this.isChequeDetailsApproved = true;
    }
  }
  goBack(){
    this.location.back();
  }
}
