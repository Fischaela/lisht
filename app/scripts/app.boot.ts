import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { OptionsService } from './options.service';

bootstrap( AppComponent, [ OptionsService ] );
