import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { UseraddComponent } from './user/useradd/useradd.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserlistComponent,
    UseraddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
