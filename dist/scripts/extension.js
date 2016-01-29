'use strict';

chrome.browserAction.onClicked.addListener( function ( tab ) {

  var _bookmarksLocalStorage = JSON.parse( localStorage.getItem( 'GEILDANKE-lisht' ) ),
		_bookmarksMockData = [
      {
        'hyperlinks' : [
          { 'name' : 'Twitter', 'url' : 'https ://twitter.com' },
          { 'name' : 'Github', 'url' : 'https ://github.com' },
          { 'name' : 'Facebook', 'url' : 'https ://facebook.com' }
        ]
      },
      {
        'hyperlinks' : [
          { 'name' : 'Geildanke', 'url' : 'https ://geildanke.com' },
          { 'name' : 'Sitepoint', 'url' : 'https ://sitepoint.com' },
          { 'name' : 'Codepen', 'url' : 'https ://codepen.com' }
        ]
      },
      {
        'hyperlinks' : [
          { 'name' : 'Dribbble', 'url' : 'https ://dribbble.com' },
          { 'name' : 'Designer News', 'url' : 'https ://news.layervault.com' },
          { 'name' : 'Mail', 'url' : 'https ://mail.google.com' }
        ]
      }
    ],
    _bookmarksToReturnArray = _bookmarksMockData;

  if ( _bookmarksLocalStorage !== null ) {
    _bookmarksToReturnArray = _bookmarksLocalStorage;
  }

  chrome.tabs.getSelected( null, function ( tab ) {

		var _newBookmarkName = {
				name : tab.title,
				url : tab.url
			},
      _bookmarksToReturn = '';

		_bookmarksToReturnArray[ 0 ].hyperlinks.push( _newBookmarkName );
		_bookmarksToReturn = JSON.stringify( _bookmarksToReturnArray );
		localStorage.setItem( 'GEILDANKE-lisht', _bookmarksToReturn );

	});

} );
