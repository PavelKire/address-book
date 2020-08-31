import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressModel } from '../../models/address.model';
import { FormValidatorsService } from '../../../../core/services/form-validators.service';
import { PHONE_MASK } from '../../constants/addresses.constants';

@Component({
  selector: 'app-add-new-address-form',
  templateUrl: './add-new-address-form.component.html',
  styleUrls: ['./add-new-address-form.component.scss']
})
export class AddNewAddressFormComponent implements OnInit {

  @Output()
  newAddress = new EventEmitter<AddressModel>();

  addAddressForm: FormGroup;

  readonly maskPhone = PHONE_MASK;

  constructor(private fb: FormBuilder,
              private formValidatorsService: FormValidatorsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addAddressForm = this.fb.group({
      firstName: [null],
      lastName: [null, [Validators.required]],
      patronymic: [null],
      phone: [null, [Validators.required, this.formValidatorsService.phoneValidator()]]
    });
}

  submit(): void {
    this.addAddressForm.markAllAsTouched();
    if (this.addAddressForm.valid) {
      const address = this.addAddressForm.getRawValue();
      this.newAddress.emit(address);
      this.addAddressForm.reset();
    }
  }
}
