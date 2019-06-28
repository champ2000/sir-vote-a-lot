import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoteFormAdminComponent } from './vote-form-admin/vote-form-admin.component';
import { VoteResultsComponent } from './vote-results/vote-results.component'; 
import { VoteFormComponent } from './vote-form/vote-form.component';
import { VoteDataService } from './services/vote-data.service'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoteFormAdminComponent,
    VoteResultsComponent,
    VoteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    VoteDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
