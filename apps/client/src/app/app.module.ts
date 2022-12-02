import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
