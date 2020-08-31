import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { getErrorMessage } from '../../core/utils/form-controls.util';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor  {

  @Input()
  value: any;

  @Input()
  label: string;

  @Input()
  mask: any;

  @Input()
  placeholder: string;

  errorMessage: string;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value): void {
    this.value = value;
  }

  valueChange(value): void {
    this.onChange(value.trim());
  }

  showError(): boolean {
    if (this.ngControl?.control.invalid && !this.ngControl?.control.untouched) {
      this.errorMessage = getErrorMessage(this.ngControl.errors);
      return this.ngControl?.control.invalid && !this.ngControl?.control.untouched;
    }
  }
}
