import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const componentsToExport = [
  InputComponent
];

@NgModule({
  declarations: [
    ...componentsToExport
  ],
  exports: [
    ...componentsToExport,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
