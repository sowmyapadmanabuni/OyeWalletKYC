import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AddressComponent implements OnInit {

  addressDetails: any = {
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
    pin: "",
  }
  constructor() { }

  ngOnInit() {
  }

}
