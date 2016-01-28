import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';

import { Bookmark } from './bookmark'
import { BookmarkDetailComponent } from './bookmark-detail.component';
import { BookmarkService } from './bookmark.service';

@Component( {
    selector: 'lisht',
    template: `
    <ul class="bookmark__list">
      <li *ngFor="#bookmarkList of bookmarkLists; #i = index">
        <ul class="bookmark__list">
          <li>
            <bookmark *ngFor="#bookmark of bookmarkList.hyperlinks; #j = index" [bookmark]="bookmark" (bookmarkChanged)="setBookmarks()" (bookmarkDeleted)="deleteBookmark(bookmark, i, j)"></bookmark>
          </li>
        </ul>
        <form>
          <input type="text" placeholder="Enter new name" [(ngModel)]="name[i]">
          <input type="text" placeholder="Enter new link" [(ngModel)]="url[i]">
          <button value="Add" (click)="addBookmarkListItem( { 'name' : name[i], 'url' : url[i] }, i )">Add</button>
        </form>
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
