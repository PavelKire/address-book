import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

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

  get showError(): boolean {
    return this.ngControl?.control.invalid && this.ngControl?.control.touched;
  }
}
