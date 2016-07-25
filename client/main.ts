/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { provideForms, disableDeprecatedForms } from "@angular/forms";

enableProdMode();

import { AppComponent } from "./components/app.component";
import { APP_ROUTER_PROVIDERS } from "./routes";

bootstrap(<Type>AppComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	FIREBASE_PROVIDERS,
	provideForms(),
	disableDeprecatedForms(),
	// Initialize Firebase app
	defaultFirebase({
		apiKey: "UmwJVfXwT0qzgcErkCUR7Jyy8284Jj28h1YfyWpp",
		authDomain: "angular2express.firebaseapp.com",
		databaseURL: "https://angular2express.firebaseio.com/",
		storageBucket: "angular2express"
	})
]);
