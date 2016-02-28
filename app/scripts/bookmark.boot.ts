import { bootstrap } from 'angular2/platform/browser';
import { BookmarkComponent } from './bookmark.component';
import { OptionsService } from './options.service';
import { TabService } from './tab.service';

bootstrap( BookmarkComponent, [ OptionsService, TabService ] );
