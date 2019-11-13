import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inscription', pathMatch: 'full' },
  { path: '', redirectTo: 'patient', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'pages', loadChildren: './pages/pages.module#PagesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'patient', loadChildren: './patient/patient.module#PatientPageModule' },
  { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
