import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookViewComponent } from './address-book-view.component';
import {AddressBookService} from '../../services/address-book.service';
import {addressFavoriteMock, addressMock} from '../../../../core/mocks/address.mock';

describe('AddressBookViewComponent', () => {
  let component: AddressBookViewComponent;
  let fixture: ComponentFixture<AddressBookViewComponent>;
  let addressBookServiceSpy: AddressBookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookViewComponent ],
      providers: [AddressBookService]
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
      phone: '+379299293232',
      selected: false
    };
    component.addNewAddress(address);
    expect(component.addresses).toEqual([addressMock]);
  });
});
