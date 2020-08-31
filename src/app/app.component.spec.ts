import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AddressBookViewComponent } from './features/address-book/containers/address-book-view/address-book-view.component';
import { AddressItemComponent } from './features/address-book/components/address-item/address-item.component';
import { AddressesListComponent } from './features/address-book/components/addresses-list/addresses-list.component';
import { AddressBookPresentationComponent } from './features/address-book/components/address-book-presentation/address-book-presentation.component';
import { AddNewAddressFormComponent } from './features/address-book/components/add-new-address-form/add-new-address-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AddressBookViewComponent,
        AddressItemComponent,
        AddressesListComponent,
        AddressBookPresentationComponent,
        AddNewAddressFormComponent
      ],
      providers: [FormBuilder],
      imports: [ FormsModule, ReactiveFormsModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
