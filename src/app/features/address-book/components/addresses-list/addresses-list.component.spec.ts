import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesListComponent } from './addresses-list.component';

describe('AddressesListComponent', () => {
  let component: AddressesListComponent;
  let fixture: ComponentFixture<AddressesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesListComponent);
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
});
