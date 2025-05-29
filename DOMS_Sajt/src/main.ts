import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


bootstrapApplication(AppComponent, appConfig)
  .then(() => {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 1000);
    document.body.classList.add('loaded');
  }
})
  .catch((err) => console.error(err));
