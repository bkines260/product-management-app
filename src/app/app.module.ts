import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppStoreModule } from './store/store.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppStoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
