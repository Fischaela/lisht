import { Bookmark } from './bookmark';
import { BOOKMARKS } from './mock-bookmarks';
import { Injectable } from 'angular2/core';

@Injectable()

export class BookmarkService {

  _bookmarksLocalStorage = JSON.parse( localStorage.getItem('GEILDANKE-lisht') );
  _bookmarksMockData = BOOKMARKS;
  _bookmarksToReturn = this._bookmarksMockData;

  getBookmarks() {
    if ( this._bookmarksLocalStorage != null ) {
      this._bookmarksToReturn = this._bookmarksLocalStorage;
    }
    return Promise.resolve( this._bookmarksToReturn );
  }

  setBookmarks( bookmarks : Object ) {
    localStorage.setItem( 'GEILDANKE-lisht', JSON.stringify( bookmarks ) );
  }

}
