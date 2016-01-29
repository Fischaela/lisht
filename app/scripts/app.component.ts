import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';

import { Bookmark } from './bookmark';
import { BookmarkOptionsComponent } from './bookmark-options.component';
import { BookmarkDetailComponent } from './bookmark-detail.component';
import { BookmarkService } from './bookmark.service';

@Component( {
    selector: 'lisht',
    templateUrl: './templates/bookmarklist.html',
    directives: [ BookmarkDetailComponent, BookmarkOptionsComponent ],
    providers: [ BookmarkService ]
} )

export class AppComponent implements OnInit {

  public bookmarkLists : Object;

  name : Object[] = [];
  url : Object[] = [];

  constructor( private _bookmarkService : BookmarkService ) { }

  getBookmarkLists() {
    this._bookmarkService.getBookmarks().then( bookmarkLists => this.bookmarkLists = bookmarkLists );
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
