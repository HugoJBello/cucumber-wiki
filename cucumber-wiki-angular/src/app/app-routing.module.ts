import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { EditorComponent } from './editor/editor.component';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AuthGuard } from './auth/auth-guard.service';
import { EntriesComponent } from './entries/entries.component';
import { EntryComponent } from './entry/entry.component';
import { FindComponent } from './find/find.component';



const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'edit/:id',
    component: EditorComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'edit/:id/:hidden',
    component: EditorComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'entries',
    component: EntriesComponent,
  },
  {
    path: 'entry/:id',
    component: EntryComponent
  },
  {
    path: 'find',
    component: FindComponent,
  },
  {
    path: 'find/:id',
    component: FindComponent
  },
  {
    path: 'user_page',
    component: UserPageComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})


export class AppRoutingModule { }
