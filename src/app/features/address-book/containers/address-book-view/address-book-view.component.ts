import { Component, OnInit } from '@angular/core';
import { AddressModel } from '../../models/address.model';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-address-book-view',
  templateUrl: './address-book-view.component.html',
  styleUrls: ['./address-book-view.component.scss']
})
export class AddressBookViewComponent implements OnInit {

  addresses: AddressModel[];

  constructor(private addressBookService: AddressBookService) { }

  ngOnInit(): void {
    this.updateAddressBook();
  }

  addNewAddress(address: AddressModel): void {
    this.addressBookService.addNewAddress(address);
    this.updateAddressBook();
  }

  removeAddress(id: string): void {
    this.addressBookService.removeAddress(id);
    this.updateAddressBook();
  }

  addAddressToFavorites(id: string): void {
    this.addressBookService.addAddressToFavorite(id);
    this.updateAddressBook();
  }

  updateAddressBook(): void {
    this.addresses = this.addressBookService.initAddressesBook();
  }

}
