import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewkycdoc',
  templateUrl: './viewkycdoc.component.html',
  styleUrls: ['./viewkycdoc.component.scss']
})
export class ViewkycdocComponent implements OnInit {

  panLoction: string;
  docTypeList = [];
  categoryList = [];
  declinedReasonsList = [];
  imagesList: any = []
  showReasonsDropDown: boolean = false;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  selectedDocId: number;
  selectedReasonForDeclined: number;
  kycDetails: Object = {}
  constructor() {

  }

  submitForm(form: NgForm) {
    // this.isSubmitted = true;
    console.log("form", form.value)
    console.log("form.valid", form)
    // let formValues =   Object.keys(form.value);
    let formObj = form.value;
    if (formObj.docType === "Select Document" || formObj.status == "") {
      return false;
    }
    if (!form.valid) {
      return false;
    } else {
      alert(JSON.stringify(form.value))
    }
  }

  ngOnInit() {
    this.kycDetails = {
      status: "",
      fileName: "",
      docType: "Select Document",
      // docType:"",
      panNumber: "",
      aadharNumber: "",
      payeeName: "",
      ifscCode: "",
      accountNumber: "",
      storeName: "",
      applicantName: "",
      gstinNumber: "",
      udyogAadharNumber: "",
      category: "Select Category",
      reasonForRejection: "Select Reason",
      reasonMessage: ""
    }

    this.panLoction = 'https://images.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb';//'http://mediauploaddev.oyespace.com/Images/1554998207731.jpg'
    this.docTypeList = this.getDocsList();
    this.categoryList = this.getCategoryList();
    this.declinedReasonsList = this.getDeclinedMessages();
    this.imagesList.push(this.panLoction);
    this.imagesList.push('http://mediauploaddev.oyespace.com/Images/1554998207731.jpg')
    this.imagesList.push('https://4html.net/PDFViewer/#/source/sample_1.pdf')


    this.galleryOptions = [
      {
        imageSize: NgxGalleryImageSize.Contain,
        width: '100%',
        height: '100%',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '300px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'http://mediauploaduat.oyespace.com/Images/aadharBack.jpeg',
        medium: 'http://mediauploaduat.oyespace.com/Images/aadharBack.jpeg',
        big: 'http://mediauploaduat.oyespace.com/Images/aadharBack.jpeg'
      },
      {
        small: 'http://mediauploaduat.oyespace.com/Images/aadharFront.jpeg',
        medium: 'http://mediauploaduat.oyespace.com/Images/aadharFront.jpeg',
        big: 'http://mediauploaduat.oyespace.com/Images/aadharFront.jpeg'
      },
      {
        small: 'http://mediauploaduat.oyespace.com/Images/ShivaCare.jpeg',
        medium: 'http://mediauploaduat.oyespace.com/Images/ShivaCare.jpeg',
        big: 'http://mediauploaduat.oyespace.com/Images/ShivaCare.jpeg'
      },
      {
        small: 'assets/sample.pdf',
        medium: 'assets/sample.pdf',
        big: 'assets/sample.pdf'
      }

    ];

  }


  onSelectDocument(event) {
    console.log("doctype", event.target.value, typeof (event.target.value))
    this.selectedDocId = event.target.value;
  }
  onSelectCategory(event) {
    console.log("onSelectCategory", event.target.value, typeof (event.target.value))
    // this.selectedDocId = event.target.value;
  }
  onSelectDeclinedReason(event) {
    console.log("onSelectDeclinedReason", event.target.value, typeof (event.target.value))
    this.selectedReasonForDeclined = event.target.value;

  }
  handleStatus(event) {
    console.log("handleStatus", event.target.value, typeof (event.target.value))
    if (event.target.value && event.target.value == 'incomplete') {
      this.showReasonsDropDown = true;
    } else {
      this.showReasonsDropDown = false;
      this.selectedReasonForDeclined = 0;
    }
  }

  getDocsList() {
    return [
      // {id:0, name:'Select Document'},
      { id: 1, name: 'PAN' },
      { id: 2, name: 'AADHAR' },
      { id: 3, name: 'Applicant Pic' },
      { id: 4, name: 'Address Proof' },
      { id: 5, name: 'Bank Document' },
      // { id: '6', name: 'Cancelled Cheque' },
      { id: 6, name: 'Store Images' },
      { id: 7, name: 'Udyog Aadhar' },
      { id: 8, name: 'GSTIN' },
    ];
  }

  getCategoryList() {
    return [
      { id: 1, name: 'Hotel/Stays' },
      { id: 2, name: 'Travel Agent' },
      { id: 3, name: 'Electronics' },
      { id: 4, name: 'Clinic/Hospitals' },
      { id: 5, name: 'Furniture Stores' },
      { id: 6, name: 'WineStores/Bars/Pubs' },
      { id: 7, name: 'VehicleWash/ Mechanic' },
      { id: 8, name: 'MeetStores' },
      { id: 9, name: 'SweetStore' },
      { id: 10, name: 'HardWare Stores' },
      { id: 11, name: 'Laundry/DryClean' },
      { id: 12, name: 'ShoeStore' },
      { id: 13, name: 'Optician/Opticals' },
      { id: 14, name: 'HyperMarket' },
      { id: 15, name: 'SportsStore' },
      { id: 16, name: 'Movie Halls' },
      { id: 17, name: 'Game/Leisure' },
      { id: 18, name: 'Photographer' },
      { id: 19, name: 'BookStore,PetShop' },
      { id: 20, name: 'Jewellery Store' },
      { id: 21, name: 'Toys & Games' },
      { id: 22, name: 'Musical Instruments' },
      { id: 23, name: 'Kitchen Utensils' },
      { id: 24, name: 'Printing & Stickering' },
      { id: 25, name: 'Decorators' },
      { id: 26, name: 'Caterers' },
      { id: 27, name: 'Schools / Educational Institutions' }
    ]
  }

  getDeclinedMessages() {
    return [
      { id: 1, message: 'Doc not clear' },
      { id: 2, message: 'Doc illegible' },
      { id: 3, message: 'Doc data incomplete' },
      { id: 4, message: 'Doc not signed' },
      { id: 5, message: 'Other' }
    ]
  }
}
