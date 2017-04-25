import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import './common/common.less';

platformBrowserDynamic().bootstrapModule(AppModule);
