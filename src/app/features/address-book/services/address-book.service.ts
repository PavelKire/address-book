import { Injectable } from '@angular/core';
import { AddressModel } from '../models/address.model';
import { generateId } from '../../../core/utils/generate-id.util';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  addressesBook: AddressModel[] = [];

  initAddressesBook(): AddressModel[] {
    this.addressesBook =  JSON.parse(localStorage.getItem('addresses')) || [];
    this.addressesBook
      .sort((a, b) => (Number(a.selected > b.selected) * 2 - 1))
      .reverse();
    return this.addressesBook;
  }

  addNewAddress(address: AddressModel): void {
    const newAddress = {
      lastName: address.lastName,
      firstName: address.firstName,
      patronymic: address.patronymic,
      phone: address.phone,
      selected: false,
      id: generateId()
    };
    this.addressesBook.push(newAddress);
    localStorage.setItem('addresses', JSON.stringify(this.addressesBook));
  }

  removeAddress(addressId: string): void {
    this.addressesBook = this.addressesBook.filter(address => address.id !== addressId);
    localStorage.setItem('addresses', JSON.stringify(this.addressesBook));
  }

  addAddressToFavorite(id: string): void {
    this.addressesBook.forEach(address => {
      if (address.id === id) {
        address.selected = !address.selected;
      }
    });
    localStorage.setItem('addresses', JSON.stringify(this.addressesBook));
  }
}
