import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './kycfile-upload.component.html',
  styleUrls: ['./kycfile-upload.component.scss']
})
export class KYCFileUploadComponent implements OnInit {

  formImport: FormGroup;
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



  @ViewChildren("labelImportView") labelImportView: QueryList<any>

  constructor(private uploadService: FileUploadService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formImport = this.formBuilder.group({
      panBack: [''],
      panFront: [''],
      aadharBack: [''],
      aadharFront: [''],
      applicantPic: [''],
      gst: [''],
      addressPic_1: [''],
      addressPic_2: [''],
      addressPic_3: [''],
      addressPic_4: [''],
      storeNameBoard: [''],
      interiorPic_1: [''],
      interiorPic_2: [''],
      interiorPic_3: [''],
      interiorPic_4: [''],
      bankPassbook: ['']
    });
  }

  ngAfterViewInit() {
    // this.applicantPicInputView.forEach(div => console.log(div));
  }

  onFileChange(event, docType) {
    console.log("onFileChange", event.target.files[0])
    if (event.target.files.length > 0) {

      // this.applicantPicInputView.nativeElement.innerText = Array.from(event.target.files)
      // .map((f: any) => f.name)
      // .join(', ');
      // } 
      let eleRef: any = this.labelImportView.filter(div => div.nativeElement.htmlFor.includes(docType));
      if (eleRef.length) {
        eleRef[0].nativeElement.innerText = Array.from(event.target.files)
          .map((f: any) => f.name)
          .join(', ');
          this.changeUploadBtnStatus(docType)
      }

      const file = event.target.files[0];
      this.formImport.get(docType).setValue(file);
    }
  }

  upload(docType) {
    console.log("doctype", docType)
    // console.log("this.formImport.get(docType).value==>", this.formImport.get(docType).value)
    if (this.formImport.get(docType).value) {
      const formData = new FormData();
      formData.append('file', this.formImport.get(docType).value);
      this.uploadService.upload(formData, this.userId).subscribe(
        (res: any) => {
          this.uploadResponse = res;
          console.log("res", res)
          if (res && res.status === 'OK') {
            switch (docType) {
              case 'applicantPic': { this.applicantPicStatus = true; /* this.formImport.get(docType).disable(); */ return };
              case 'panBack': this.panBackStatus = true; return;
              case 'panFront': this.panFrontStatus = true; return;
              case 'aadharBack': this.aadharBackStatus = true; return;
              case 'aadharFront': this.aadharFrontStatus = true; return;
              case 'gst': this.gstStatus = true; return;
              case 'bankPassbook': this.bankPassbookStatus = true; return;
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
      case 'applicantPic': { this.enableApplicantUploadBtn = true; /* this.formImport.get(docType).disable(); */ return };
      case 'panBack': this.enablePanBackUploadBtn = true; return;
      case 'panFront': this.enablePanFrontUploadBtn = true; return;
      case 'aadharBack': this.enableAadharBackUploadBtn = true; return;
      case 'aadharFront': this.enableAadharFrontUploadBtn = true; return;
      case 'gst': this.enableGstUploadBtn = true; return;
      case 'bankPassbook': this.enableBankPassbookUploadBtn = true; return;
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
}
