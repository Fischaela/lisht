import { bootstrap } from 'angular2/platform/browser';
import { BookmarkComponent } from './bookmark.component';
import { OptionsService } from './options.service';

bootstrap( BookmarkComponent, [ OptionsService ] );
