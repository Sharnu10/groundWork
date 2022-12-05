import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TodoComponent } from './todo/todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // FormlyModule.forRoot({}),
    // FormlyMaterialModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, NxWelcomeComponent, TodoComponent],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
