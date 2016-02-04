import { bootstrap } from 'angular2/platform/browser';
import { OptionsComponent } from './options.component';
import { OptionsService } from './options.service';

bootstrap( OptionsComponent, [ OptionsService ] );
