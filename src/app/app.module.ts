import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ResourcesComponent } from './resources/resources.component';
import { HeaderComponent } from './header/header.component';

import { ApiService } from 'src/_services/app.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: 'core', component: CoreComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '', component: CoreComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ApplicationsComponent,
    ResourcesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
