import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { CustomButtonComponent } from '../form-core/custom-formly/custom-formly-types/custom-button/custom-button.component';

const allModules = [
  FormlyModule.forRoot({
    types: [{ name: 'cust-input', component: CustomButtonComponent }],
  }),
  FormlyMaterialModule,
];

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [allModules],
  exports: [allModules],
})
export class CoreModule {}
