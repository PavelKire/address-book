import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAddressFormComponent } from './add-new-address-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidatorsService } from '../../../../core/services/form-validators.service';
import { InputComponent } from '../../../../shared/input/input.component';
import { AddressModel } from '../../models/address.model';

describe('AddNewAddressFormComponent', () => {
  let component: AddNewAddressFormComponent;
  let fixture: ComponentFixture<AddNewAddressFormComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let formValidatorsServiceSpy: FormValidatorsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ AddNewAddressFormComponent, InputComponent ],
      providers: [ FormBuilder, FormValidatorsService ]
    })
    .compileComponents();

    formValidatorsServiceSpy = TestBed.inject(FormValidatorsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAddressFormComponent);
    component = fixture.componentInstance;
    component.addAddressForm = formBuilder.group({
      firstName: [null],
      lastName: [null, [Validators.required]],
      patronymic: [null],
      phone: [null, [Validators.required, formValidatorsServiceSpy.phoneValidator()]]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    const mock = {
      firstName: 'Иван',
      lastName: 'Иванов',
      patronymic: 'Иванович',
      phone: '+7(985)531-08-68'
    };
    spyOnProperty(component.addAddressForm, 'valid').and.returnValue(true);
    component.addAddressForm.getRawValue = () => mock;
    const submitClickSpy = spyOn(component.newAddress, 'emit');
    component.submit();
    expect(submitClickSpy).toHaveBeenCalledWith(mock as AddressModel);
  });
});
