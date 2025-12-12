import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyBi2cSLs2F1YNdK-gbbTSkOw3WpqXLtXew",
    authDomain: "friendlychat-57563.firebaseapp.com",
    projectId: "friendlychat-57563",
    storageBucket: "friendlychat-57563.firebasestorage.app",
    messagingSenderId: "763190858328",
    appId: "1:763190858328:web:8a061b3ec7f852daeb702d" 
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => {
        return getMessaging();
    }),
    provideStorage(() => getStorage()),
    provideRouter(routes)
  ],
};
