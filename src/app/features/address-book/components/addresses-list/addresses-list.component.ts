import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressModel } from '../../models/address.model';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss']
})
export class AddressesListComponent {

  @Input()
  addresses: AddressModel[];

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
