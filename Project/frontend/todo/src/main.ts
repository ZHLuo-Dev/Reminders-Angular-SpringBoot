import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpIntercepterBasicAuthService } from './app/service/httpAuth/http-basic-auth.service';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
        { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));