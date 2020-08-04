import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { XyzComponent } from './xyz/xyz.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService} from "./movie.service";
import { MessagesComponent } from './messages/messages.component';
import { MessagesService} from "./messages.service";
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor} from './_helpes/jwt.interceptor';
import { ErrorInterceptor} from './_helpes/error.interceptor';
// used to create fake backend
import { fakeBackendProvider} from './_helpes/fake-backend';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    XyzComponent,
    MovieDetailComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    MessagesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
