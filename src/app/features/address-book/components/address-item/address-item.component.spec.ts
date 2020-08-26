import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressItemComponent } from './address-item.component';

describe('AddressItemComponent', () => {
  let component: AddressItemComponent;
  let fixture: ComponentFixture<AddressItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressItemComponent);
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
