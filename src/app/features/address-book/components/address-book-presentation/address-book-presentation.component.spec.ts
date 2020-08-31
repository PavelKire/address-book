import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookPresentationComponent } from './address-book-presentation.component';
import { addressMock } from '../../../../core/mocks/address.mock';
import { AddNewAddressFormComponent } from '../add-new-address-form/add-new-address-form.component';
import { AddressesListComponent } from '../addresses-list/addresses-list.component';
import { AddressItemComponent } from '../address-item/address-item.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/input/input.component';

describe('AddressBookPresentationComponent', () => {
  let component: AddressBookPresentationComponent;
  let fixture: ComponentFixture<AddressBookPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressBookPresentationComponent,
        AddNewAddressFormComponent,
        AddressesListComponent,
        AddressItemComponent,
        InputComponent
      ],
      providers: [ FormBuilder ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete address', () => {
    const id = 'f5dd7d51';
    const deleteAddressClickSpy = spyOn(component.removeAddress, 'emit');
    component.deleteAddress(id);
    expect(deleteAddressClickSpy).toHaveBeenCalledWith(id);
  });

  it('should emit add to favorites', () => {
    const id = 'f5dd7d51';
    const addToFavoriteClickSpy = spyOn(component.addToFavorites, 'emit');
    component.addAddressToFavorites(id);
    expect(addToFavoriteClickSpy).toHaveBeenCalledWith(id);
  });

  it('should emit add new address', () => {
    const addNewAddressClickSpy = spyOn(component.newAddress, 'emit');
    component.addAddress(addressMock);
    expect(addNewAddressClickSpy).toHaveBeenCalledWith(addressMock);
  });
});
