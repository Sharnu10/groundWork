import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { ChatMsgComponent } from './chat-msg/chat-msg.component';

const routes: Routes = [
  { path: 'chat', component: ChatMsgComponent },
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
