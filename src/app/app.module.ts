import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

//Components
import { PostulationCardComponent } from './components/postulation-card/postulation-card.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostulationsComponent } from './pages/postulations/postulations.component';
import { ProfileComponent } from './templates/profile/profile.component'
import { AuthInterceptor} from "./http-interceptors/auth-interceptor";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MatNativeDateModule } from '@angular/material/core';
import { RegisterFreelancerComponent } from './auth/register/register-freelancer/register-freelancer.component';
import { RegisterEmployerComponent } from './auth/register/register-employer/register-employer.component';
import { ApplyPostulationsComponent } from './pages/apply-postulations/apply-postulations.component';
import { EditProfileDialogComponent } from './components/dialogs/edit-profile-dialog/edit-profile-dialog.component';
import { AddSkillComponent } from './components/dialogs/add-skill/add-skill.component';
import { AddCertificateComponent } from './components/dialogs/add-certificate/add-certificate.component';
import {MatTableModule} from "@angular/material/table";
import { HomeComponent } from './templates/home/home.component';
import { HomeEmployerComponent } from './pages/home-employer/home-employer.component';
import { EmployerOffersComponent } from './pages/employer-offers/employer-offers.component';
import { EmployerProfileComponent } from './pages/employer-profile/employer-profile.component';
import { FreelancerProfileComponent } from './pages/freelancer-profile/freelancer-profile.component';
import { FreelancerCardComponent } from './components/freelancer-card/freelancer-card.component';
import { ViewFreelancerProfileComponent } from './pages/view-freelancer-profile/view-freelancer-profile.component';
import { EmployerOfferComponent } from './components/employer-offer/employer-offer.component';
import { OfferPostulationsComponent } from './pages/offer-postulations/offer-postulations.component';
import { AddOfferComponent } from './components/dialogs/add-offer/add-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostulationCardComponent,
    SearchComponent,
    HeaderComponent,
    PostulationsComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFreelancerComponent,
    RegisterEmployerComponent,
    ApplyPostulationsComponent,
    EditProfileDialogComponent,
    AddSkillComponent,
    AddCertificateComponent,
    HomeComponent,
    HomeEmployerComponent,
    EmployerOffersComponent,
    EmployerProfileComponent,
    FreelancerProfileComponent,
    FreelancerCardComponent,
    ViewFreelancerProfileComponent,
    EmployerOfferComponent,
    OfferPostulationsComponent,
    AddOfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
