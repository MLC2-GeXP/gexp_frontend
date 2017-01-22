import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ExplorerModule } from '../explorer/explorer.module';
import {RouterModule} from "@angular/router";
import { AlertModule } from 'ng2-bootstrap';
import { MaterialModule } from '@angular/material';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppComponent } from './app.component';
import { WelcomeComponent } from '../home/welcome.component';
import 'hammerjs';
import {DataModule} from "../data/data.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    DataModule,
    ExplorerModule,
    BrowserModule,
    HttpModule,
    Ng2GoogleChartsModule,
    AlertModule.forRoot(),
    MaterialModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
