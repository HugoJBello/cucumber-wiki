import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { SingupComponent } from './singup/singup.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './auth/auth.service';
import { EntriesService } from './entries.service';
import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth/auth-guard.service';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entry/entry.component';
import { FindComponent } from './find/find.component';
import { NgxMdModule } from 'ngx-md';
import { MatSelectModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ConfigService } from './config/config.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditorComponent,
    SingupComponent,
    UserPageComponent,
    NavbarComponent,
    EntriesComponent,
    EntryComponent,
    FindComponent,
  ],
  imports: [
    NgxMdModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AuthService,
    EntriesService,
    ConfigService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
