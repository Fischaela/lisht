///<reference path="chrome.d.ts" />

import { Injectable } from 'angular2/core';
import { BookmarkService } from './bookmark.service';

@Injectable()

// TODO new name
export class TabService {

  constructor ( bookmarkService : BookmarkService ) {

    console.log( 'TabService initialized' );

    // check, if being extension or not
    if (typeof chrome.browserAction !== 'undefined') {

      chrome.browserAction.onClicked.addListener( function ( tab ) {

        let bookmarkLists : Object;

        bookmarkService.getBookmarks().then( bookmarkLists => {
          bookmarkLists = bookmarkLists;
          chrome.tabs.getSelected( null, function ( tab ) {

            let newBookmark = {
                name : tab.title,
                url : tab.url
              };

              bookmarkLists[ 0 ].hyperlinks.push( newBookmark );
              bookmarkService.setBookmarks( bookmarkLists );

          });
        });
      });
    }
  }
}
