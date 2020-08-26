import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookViewComponent } from './containers/address-book-view/address-book-view.component';
import { AddressBookPresentationComponent } from './components/address-book-presentation/address-book-presentation.component';
import { AddNewAddressFormComponent } from './components/add-new-address-form/add-new-address-form.component';
import { AddressesListComponent } from './components/addresses-list/addresses-list.component';
import { AddressItemComponent } from './components/address-item/address-item.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AddressBookViewComponent,
    AddressBookPresentationComponent,
    AddNewAddressFormComponent,
    AddressesListComponent,
    AddressItemComponent
  ],
  exports: [
    AddressBookViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AddressBookModule { }
