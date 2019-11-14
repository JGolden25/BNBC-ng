import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { TokenInterceptor } from './shared/token.interceptor';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent  
  ],
  imports: [
    RouterModule.forChild(routes), 
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
        provide: HTTP_INTERCEPTORS,
        useClass:TokenInterceptor,
        multi: true
    }
  ]
})
export class AuthModule { }
