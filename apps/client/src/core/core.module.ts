import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

const allModules = [FormlyModule.forRoot({}), FormlyMaterialModule];

@NgModule({
  imports: [allModules],
  exports: [allModules],
})
export class CoreModule {}
