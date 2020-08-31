import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormControl, FormsModule, NgControl } from '@angular/forms';
import { getErrorMessage } from '../../core/utils/form-controls.util';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    const NG_CONTROL_PROVIDER = {
      provide: NgControl,
      useClass: class extends NgControl {
        control = new FormControl();
        // tslint:disable-next-line:no-empty typedef
        viewToModelUpdate() {}
      },
    };
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [ FormsModule ]
    })
      .overrideComponent(InputComponent, {
        add: { providers: [NG_CONTROL_PROVIDER] },
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write value', () => {
    const value = '123';
    component.writeValue(value);
    expect(component.value).toEqual(value);
  });

  it('should change value', () => {
    const value = '123';
    const onChangeSpy = spyOn(component, 'onChange');
    component.valueChange(value);
    expect(onChangeSpy).toHaveBeenCalledWith(value);
  });

  it('should call registerOnChange and registerOnTouched', fakeAsync(() => {
    const onChangeEvent = (change: any) => { console.log('There were changes ', change); };
    const registerOnChangeMock = spyOn(component, 'registerOnChange').and.callThrough();
    const registerOnTouchedMock = spyOn(component, 'registerOnTouched').and.callThrough();
    component.registerOnChange(onChangeEvent);
    component.registerOnTouched(onChangeEvent);
    fixture.detectChanges();
    tick();
    expect(registerOnChangeMock).toHaveBeenCalledTimes(1);
    expect(registerOnTouchedMock).toHaveBeenCalledTimes(1);
  }));

  it('should show required error', () => {
    spyOnProperty(component.ngControl.control, 'invalid').and.returnValue(true);
    spyOnProperty(component.ngControl.control, 'untouched').and.returnValue(false);
    const mockError = {
      required: true,
    };
    spyOnProperty(component.ngControl, 'errors').and.returnValue(mockError);
    component.errorMessage = getErrorMessage(component.ngControl.errors);
    expect(component.errorMessage).toEqual('Обязательное поле');
    expect(component.showError()).toBeTruthy();
  });

  it('should show phone error', () => {
    spyOnProperty(component.ngControl.control, 'invalid').and.returnValue(true);
    spyOnProperty(component.ngControl.control, 'untouched').and.returnValue(false);
    const mockPhoneError = {
      invalidPhone: {
        value: null
      }
    };
    spyOnProperty(component.ngControl, 'errors').and.returnValue(mockPhoneError);
    component.errorMessage = getErrorMessage(component.ngControl.errors);
    expect(component.errorMessage).toEqual('Неправильный номер телефона');
    expect(component.showError()).toBeTruthy();
  });
});
