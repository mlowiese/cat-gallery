import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CatGallery } from './app/cat-gallery/cat-gallery';

bootstrapApplication(CatGallery, appConfig)
  .catch((err) => console.error(err));