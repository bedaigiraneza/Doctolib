import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
    apiKey: 'AIzaSyDIyvOfPCt_XCNqlZrrJM2f0RxHGZ_rayQ',
    authDomain: 'doctolib-c8069.firebaseapp.com',
    databaseURL: 'https://doctolib-c8069.firebaseio.com',
    projectId: 'doctolib-c8069',
    storageBucket: 'doctolib-c8069.appspot.com',
    messagingSenderId: '679509680426',
    appId: '1:679509680426:web:980d7d83b53af4e64f7e53',
    measurementId: 'G-ZZ07T44ZDX'
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
