import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAddressFormComponent } from './add-new-address-form.component';
import {FormBuilder} from '@angular/forms';

describe('AddNewAddressFormComponent', () => {
  let component: AddNewAddressFormComponent;
  let fixture: ComponentFixture<AddNewAddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAddressFormComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should init form', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should submit form', () => {
  //   const formMock = {
  //     firstName: '2',
  //     lastName: '1',
  //     patronymic: '3',
  //     phone: '4',
  //   };
  // });
});
