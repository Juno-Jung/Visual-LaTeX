import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KatexModule } from 'ng-katex';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './editor/editor.component';
import { LeftButtonsComponent } from './left-buttons/left-buttons.component';
import { RightButtonsComponent } from './right-buttons/right-buttons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent,
    LeftButtonsComponent,
    RightButtonsComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KatexModule,
    CKEditorModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
