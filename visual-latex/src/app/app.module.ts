import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './editor/editor.component';
import { LeftButtonsComponent } from './left-buttons/left-buttons.component';
import { RightButtonsComponent } from './right-buttons/right-buttons.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent,
    LeftButtonsComponent,
    RightButtonsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
