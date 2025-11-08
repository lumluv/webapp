import { enableProdMode, importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
if (environment.production) {
  enableProdMode();
}
import 'zone.js';
bootstrapApplication(AppComponent, appConfig).then(() => {
  providers: [
    provideHttpClient() // ← Thêm dòng này
  ]
}).catch(err => console.error(err));