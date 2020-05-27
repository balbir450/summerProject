import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef, MatDialogModule} from '@angular/material/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MydialogComponent } from './mydialog/mydialog.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    SubscribeComponent,
    MydialogComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MydialogComponent]
})
export class AppModule { }
