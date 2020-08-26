import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressModel } from '../../models/address.model';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss']
})
export class AddressItemComponent {

  @Input()
  address: AddressModel;

  @Output()
  removeAddress = new EventEmitter<string>();

  @Output()
  addToFavorites = new EventEmitter<string>();

  deleteAddress(id: string): void {
    this.removeAddress.emit(id);
  }

  addAddressToFavorites(id: string): void {
    this.addToFavorites.emit(id);
  }
}
