///<reference path="chrome.d.ts" />

import { Injectable } from 'angular2/core';
import { BookmarkService } from './bookmark.service';

@Injectable()

// TODO new name
export class EventPage {

  constructor ( bookmarkService : BookmarkService ) {

    let bookmarkLists : Object;
    console.log('Constructor');

    // check, if being extension or not
    if (typeof chrome.browserAction !== 'undefined') {
      console.log('browserAction');
      chrome.browserAction.onClicked.addListener( function ( tab ) {
        console.log('AddListener');
        bookmarkService.getBookmarks().then( bookmarkLists => {
          console.log('Promise');
          bookmarkLists = bookmarkLists;
          getSelectedTab( bookmarkLists );
        });
      });
    } else {
      console.log( 'EventPage initialized' );
    }

    function getSelectedTab ( bookmarkLists ) {
      console.log('getSelectedTab');
      chrome.tabs.getSelected( null, function ( tab ) {
        console.log('getSelected');
        let newBookmark = {
          name : tab.title,
          url : tab.url
        };
        console.log('newBookmark', newBookmark);
        bookmarkLists[ 0 ].hyperlinks.push( newBookmark );
        bookmarkService.setBookmarks( bookmarkLists );
      });
    }
  }
}
