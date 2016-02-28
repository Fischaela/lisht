import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';

import { Bookmark } from './bookmark';
import { BookmarkDetailComponent } from './bookmark-detail.component';
import { BookmarkService } from './bookmark.service';
import { OptionsService } from './options.service';
import { TabService } from './tab.service';

@Component( {
    selector: 'lisht-bookmarks',
    templateUrl: './templates/bookmarklist.html',
    directives: [ BookmarkDetailComponent ],
    providers: [ BookmarkService, TabService ]
} )

export class BookmarkComponent implements OnInit {

  public bookmarkLists : Object;
  public activeColor : string;

  name : Object[] = [];
  url : Object[] = [];

  constructor( private _bookmarkService : BookmarkService, private _optionsService : OptionsService, private _tabService: TabService ) {}

  getBookmarkLists() {
    this._bookmarkService.getBookmarks().then( bookmarkLists => this.bookmarkLists = bookmarkLists );
    this._optionsService.getActiveColor().then( activeColor => this.activeColor = activeColor );
  }

  setBookmarks() {
    this._bookmarkService.setBookmarks( this.bookmarkLists );
  }

  deleteBookmark( bookmark : Bookmark, i : number, j : number ) {
    this.bookmarkLists[ i ].hyperlinks.splice( j, 1 );
    this.setBookmarks();
  }

  addBookmarkListItem( bookmark : Bookmark, index : number ) {
    this.bookmarkLists[ index ].hyperlinks.push( bookmark );
    this.setBookmarks();
    this.name[ index ] = '';
    this.url[ index ] = '';
  };

  ngOnInit() {
    this.getBookmarkLists();
  }

}
