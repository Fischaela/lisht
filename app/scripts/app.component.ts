import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { OptionsComponent } from './options.component';
import { BookmarkComponent } from './bookmark.component';

@Component( {
    selector: 'lisht',
    template: '<router-outlet></router-outlet>',
    directives: [ BookmarkComponent, OptionsComponent, ROUTER_DIRECTIVES ],
    providers: [ ROUTER_PROVIDERS ]
} )

@RouteConfig( [
  { path :'/', name : 'Lisht Bookmarks', component : BookmarkComponent },
  { path :'/', name : 'Lisht Options', component : OptionsComponent }
] )

export class AppComponent { }
