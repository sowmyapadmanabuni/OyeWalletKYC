import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {

  @Input('modalTitle') modalTitle: string;
  @Input('displayBtnText') btnText: string;
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Input('modalId') modalId: string;

  inputMessage: string;
  constructor() { }

  ngOnInit() {
  }

  onSaveClickEvent(event) {

    this.onSave.emit(this.inputMessage)
    this.onClose(event);
    // document.getElementById(`exampleModalCenter${this.modalId}`).style.display = 'none';
  }
  onClose(event) {
    this.onCancel.emit(event);
  }
  // valuechange(event) {
  //   console.log(event)
  // }
}
