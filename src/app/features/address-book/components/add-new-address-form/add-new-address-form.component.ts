import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressModel } from '../../models/address.model';

@Component({
  selector: 'app-add-new-address-form',
  templateUrl: './add-new-address-form.component.html',
  styleUrls: ['./add-new-address-form.component.scss']
})
export class AddNewAddressFormComponent implements OnInit {

  @Output()
  newAddress = new EventEmitter<AddressModel>();

  addAddressFrom: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
  this.addAddressFrom = this.fb.group({
    firstName: [null],
    lastName: [null, [Validators.required]],
    patronymic: [null],
    phone: [null, [Validators.required]]
  });
}

  submit(): void {
    this.addAddressFrom.markAllAsTouched();
    if (this.addAddressFrom.valid) {
      const address = this.addAddressFrom.getRawValue();
      this.newAddress.emit(address);
      this.addAddressFrom.reset();
    }
  }
}
