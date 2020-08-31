import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookViewComponent } from './address-book-view.component';
import { AddressBookService } from '../../services/address-book.service';
import { addressFavoriteMock, addressMock } from '../../../../core/mocks/address.mock';
import { AddressBookPresentationComponent } from '../../components/address-book-presentation/address-book-presentation.component';
import { AddNewAddressFormComponent } from '../../components/add-new-address-form/add-new-address-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressesListComponent } from '../../components/addresses-list/addresses-list.component';
import { InputComponent } from '../../../../shared/input/input.component';
import { AddressItemComponent } from '../../components/address-item/address-item.component';

describe('AddressBookViewComponent', () => {
  let component: AddressBookViewComponent;
  let fixture: ComponentFixture<AddressBookViewComponent>;
  let addressBookServiceSpy: AddressBookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressBookViewComponent,
        AddressBookPresentationComponent,
        AddNewAddressFormComponent,
        AddressesListComponent,
        InputComponent,
        AddressItemComponent
      ],
      providers: [
        AddressBookService,
        FormBuilder
      ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    addressBookServiceSpy = TestBed.inject(AddressBookService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update address book', () => {
    addressBookServiceSpy.addressesBook = [];
    component.updateAddressBook();
    expect(component.addresses).toEqual([]);
  });

  it('should remove address', () => {
    addressBookServiceSpy.addressesBook = [addressMock];
    const id = 'f5dd7d51';
    component.removeAddress(id);
    expect(component.addresses).toEqual([]);
  });

  it('should add address to favorites', () => {
    addressBookServiceSpy.addressesBook = [addressMock];
    const id = 'f5dd7d51';
    component.addAddressToFavorites(id);
    expect(component.addresses).toEqual([addressFavoriteMock]);
  });

  it('should add new address', () => {
    addressBookServiceSpy.addressesBook = [];
    const address = {
      firstName: 'Иван',
      lastName: 'Иванов',
      patronymic: 'Иванович',
      phone: '+7(985)531-08-68'
    };
    component.addNewAddress(address);
    component.addresses[0].id = 'f5dd7d51';
    expect(component.addresses).toEqual([addressMock]);
  });
});
