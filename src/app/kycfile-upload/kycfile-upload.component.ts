import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './kycfile-upload.component.html',
  styleUrls: ['./kycfile-upload.component.scss']
})
export class KYCFileUploadComponent implements OnInit {

  kycForm: FormGroup;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  applicantPicStatus: boolean = false;
  panBackStatus: boolean = false;
  panFrontStatus: boolean = false;
  aadharBackStatus: boolean = false;
  aadharFrontStatus: boolean = false;
  gstStatus: boolean = false;
  addressPic_1Status: boolean = false;
  addressPic_2Status: boolean = false;
  addressPic_3Status: boolean = false;
  addressPic_4Status: boolean = false;
  storeNameBoardStatus: boolean = false;
  interiorPic_1Status: boolean = false;
  interiorPic_2Status: boolean = false;
  interiorPic_3Status: boolean = false;
  interiorPic_4Status: boolean = false;
  bankPassbookStatus: boolean = false;

  enableApplicantUploadBtn: boolean = false;
  enablePanBackUploadBtn: boolean = false;
  enablePanFrontUploadBtn: boolean = false;
  enableAadharFrontUploadBtn: boolean = false;
  enableAadharBackUploadBtn: boolean = false;
  enableGstUploadBtn: boolean = false;
  enableAddress_1UploadBtn: boolean = false;
  enableAddress_2UploadBtn: boolean = false;
  enableAddress_3UploadBtn: boolean = false;
  enableAddress_4UploadBtn: boolean = false;
  enableStoreNameBoardUploadBtn: boolean = false;
  enableInteriorPic_1UploadBtn: boolean = false;
  enableInteriorPic_2UploadBtn: boolean = false;
  enableInteriorPic_3UploadBtn: boolean = false;
  enableInteriorPic_4UploadBtn: boolean = false;
  enableBankPassbookUploadBtn: boolean = false;

  kycDetails: any;
  applicantName: any;




  @ViewChildren("labelImportView") labelImportView: QueryList<any>

  constructor(private uploadService: FileUploadService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.kycDetails = {

      applicantName: "",
      applicantImageUrl: "",

      panNumber: "",
      panFrontImageUrl: "",
      panBackImageUrl: "",

      aadharNumber: "",
      aadharFrontImageUrl: "",
      aadharBackImageUrl: "",

      payeeName: "",
      ifscCode: "",
      accountNumber: "",
      bankPassbookImageUrl: "",

      storeName: "",

      address_line_1: "",
      address_line_2: "",
      city: "",
      state: "",
      country: "",
      pin: "",

      addressImageUrl_1: "",
      addressImageUrl_2: "",
      addressImageUrl_3: "",
      addressImageUrl_4: "",

      storeNameBoardImageUrl: "",
      storeInteriorImageUrl_1: "",
      storeInteriorImageUrl_2: "",
      storeInteriorImageUrl_3: "",
      storeInteriorImageUrl_4: "",

      gstinNumber: "",
      gstinImageUrl: "",
      udyogAadharNumber: "",

    }

  }

  ngAfterViewInit() {
    // this.applicantPicInputView.forEach(div => console.log(div));
  }

  onFileChange(event, docType) {
    console.log("docType", docType)
    console.log("kycDetails", this.kycDetails)
    console.log("onFileChange", event.target.files[0])
    if (event.target.files.length > 0) {

      // this.applicantPicInputView.nativeElement.innerText = Array.from(event.target.files)
      // .map((f: any) => f.name)
      // .join(', ');
      // } 
      let eleRef: any = this.labelImportView.filter(div => div.nativeElement.htmlFor.includes(docType));
      console.log("eleRef", eleRef)
      if (eleRef.length) {
        eleRef[0].nativeElement.innerText = Array.from(event.target.files)
          .map((f: any) => f.name)
          .join(', ');
        this.changeUploadBtnStatus(docType)
      }
      const file = event.target.files[0];
      // this.kycForm.get(docType).setValue(file);
      this[`${docType}File`] = file;

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this[docType] = reader.result;
      }
    }
  }

  upload(docType) {
    console.log("doctype", docType)
    console.log("this[docType]", this[`${docType}File`])
    // console.log("this.kycForm.get(docType).value==>", this.kycForm.get(docType).value)
    // if (this.kycForm.get(docType).value) {
    if (this[`${docType}File`]) {
      const formData = new FormData();
      // formData.append('file', this.kycForm.get(docType).value);
      formData.append('file', this[`${docType}File`]);
      this.uploadService.upload(formData, this.userId).subscribe(
        (res: any) => {
          this.uploadResponse = res;
          console.log("res", res)
          if (res && res.status === 'OK') {
            switch (docType) {
              case 'applicantPic': { this.applicantPicStatus = true; /* this.kycForm.get(docType).disable(); */ return };
              case 'panBackPic': this.panBackStatus = true; return;
              case 'panFrontPic': this.panFrontStatus = true; return;
              case 'aadharBackPic': this.aadharBackStatus = true; return;
              case 'aadharFrontPic': this.aadharFrontStatus = true; return;
              case 'gst': this.gstStatus = true; return;
              case 'bankPassbookPic': this.bankPassbookStatus = true; return;
              case 'addressPic_1': this.addressPic_1Status = true; return;
              case 'addressPic_2': this.addressPic_2Status = true; return;
              case 'addressPic_3': this.addressPic_3Status = true; return;
              case 'addressPic_4': this.addressPic_4Status = true; return;
              case 'storeNameBoard': this.storeNameBoardStatus = true; return;
              case 'interiorPic_1': this.interiorPic_1Status = true; return;
              case 'interiorPic_2': this.interiorPic_2Status = true; return;
              case 'interiorPic_3': this.interiorPic_3Status = true; return;
              case 'interiorPic_4': this.interiorPic_4Status = true; return;
            }
          }
        },
        (err) => { this.error = err; console.log("err", err) }
      );
    } else {
      console.log("File not selected")
    }
  }

  changeUploadBtnStatus(docType) {
    switch (docType) {
      case 'applicantPic': { this.enableApplicantUploadBtn = true; /* this.kycForm.get(docType).disable(); */ return };
      case 'panBackPic': this.enablePanBackUploadBtn = true; return;
      case 'panFrontPic': this.enablePanFrontUploadBtn = true; return;
      case 'aadharBackPic': this.enableAadharBackUploadBtn = true; return;
      case 'aadharFrontPic': this.enableAadharFrontUploadBtn = true; return;
      case 'gst': this.enableGstUploadBtn = true; return;
      case 'bankPassbookPic': this.enableBankPassbookUploadBtn = true; return;
      case 'addressPic_1': this.enableAddress_1UploadBtn = true; return;
      case 'addressPic_2': this.enableAddress_2UploadBtn = true; return;
      case 'addressPic_3': this.enableAddress_3UploadBtn = true; return;
      case 'addressPic_4': this.enableAddress_4UploadBtn = true; return;
      case 'storeNameBoard': this.enableStoreNameBoardUploadBtn = true; return;
      case 'interiorPic_1': this.enableInteriorPic_1UploadBtn = true; return;
      case 'interiorPic_2': this.enableInteriorPic_2UploadBtn = true; return;
      case 'interiorPic_3': this.enableInteriorPic_3UploadBtn = true; return;
      case 'interiorPic_4': this.enableInteriorPic_4UploadBtn = true; return;


    }
  }

  onSubmit(form: NgForm) {
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
}
