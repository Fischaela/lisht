/* global chrome */
'use strict';
chrome.browserAction.onClicked.addListener(function (tab) {
  // For using the variable tab jslint
  console.log(tab);
  var jsonListData = localStorage.getItem('GEILDANKE-lisht'), lishtData = '';
  if (jsonListData !== null) {
    lishtData = JSON.parse(jsonListData);
  } else {
    lishtData = [
      {
        'hyperlinks': [
          {
            'name': 'twitter',
            'url': 'http://www.twitter.com'
          },
          {
            'name': 'dribbble',
            'url': 'http://dribbble.com'
          },
          {
            'name': 'codepen',
            'url': 'http://codepen.io'
          }
        ]
      },
      {
        'hyperlinks': [
          {
            'name': 'Designer News',
            'url': 'https://news.layervault.com'
          },
          {
            'name': 'Smashing Magazine',
            'url': 'http://www.twitter.com'
          },
          {
            'name': 'Hackernews',
            'url': 'http://news.ycombinator.com'
          }
        ]
      },
      {
        'hyperlinks': [
          {
            'name': 'Mail',
            'url': 'https://mail.google.com'
          },
          {
            'name': 'Kalender',
            'url': 'https://www.google.com/calendar'
          },
          {
            'name': 'kippt',
            'url': 'https://kippt.com/feed'
          }
        ]
      }
    ];
  }
  // Debugging
  // console.log(lishtData);
  chrome.tabs.getSelected(null, function (tab) {
    var newItemName = tab.title, newItemURL = tab.url, newListItem = {
        name: newItemName,
        url: newItemURL
      };
    console.log(newListItem);
    lishtData[0].hyperlinks.push(newListItem);
    jsonListData = JSON.stringify(lishtData);
    localStorage.setItem('GEILDANKE-lisht', jsonListData);
  });
});