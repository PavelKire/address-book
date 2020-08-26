import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressModel } from '../../models/address.model';

@Component({
  selector: 'app-address-book-presentation',
  templateUrl: './address-book-presentation.component.html',
  styleUrls: ['./address-book-presentation.component.scss']
})
export class AddressBookPresentationComponent {

  @Input()
  addresses: AddressModel[];

  @Output()
  newAddress = new EventEmitter<AddressModel>();

  @Output()
  removeAddress = new EventEmitter<string>();

  @Output()
  addToFavorites = new EventEmitter<string>();

  addAddress(address: AddressModel): void {
    this.newAddress.emit(address);
  }

  deleteAddress(id: string): void {
    this.removeAddress.emit(id);
  }

  addAddressToFavorites(id: string): void {
    this.addToFavorites.emit(id);
  }
}
