import { Component } from 'angular2/core';

import { Bookmark } from './bookmark';

@Component({
  selector: 'bookmark',
  templateUrl: './app/templates/bookmark.html',
  inputs: [ 'bookmark' ]
})

export class BookmarkDetailComponent {
  public bookmark : Bookmark;
  _submitted = false;

  onSubmit( bookmark : Bookmark ) {
    this._submitted = false;
  }
}
