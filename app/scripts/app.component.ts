import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';

import { Bookmark } from './bookmark'
import { BookmarkDetailComponent } from './bookmark-detail.component';
import { BookmarkService } from './bookmark.service';

@Component( {
    selector: 'lisht',
    template: `
    <ul class="bookmark__list">
      <li>
        <bookmark *ngFor="#bookmark of bookmarks" [bookmark]="bookmark"></bookmark>
      </li>
    </ul>
      `,
    styles: [`
      .bookmark {
        list-style: none;
      }
      .bookmark__list {
        margin: 0;
        padding: 0;
      }
      .bookmark__link {
        color: #000;
        text-decoration: none;
      }
    `],
    directives: [ BookmarkDetailComponent ],
    providers: [ BookmarkService ]
} )

export class AppComponent {

  public bookmarks : Bookmark[];

  constructor( private _bookmarkService : BookmarkService ) { }

  getBookmarks() {
    this._bookmarkService.getBookmarks().then( bookmarks => this.bookmarks = bookmarks );
  }

  ngOnInit() {
    this.getBookmarks();
  }

}
