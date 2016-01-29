import { Component } from 'angular2/core';

@Component({
  selector: 'lisht-options',
  templateUrl: './templates/options.html'
})

export class OptionsComponent {

  public colors = [
    { color : 'pink-dark' },
    { color : 'pink' },
    { color : 'red-dark' },
    { color : 'red' },
    { color : 'orange-dark' },
    { color : 'orange' },
    { color : 'yellow-dark' },
    { color : 'yellow' },
    { color : 'green-dark' },
    { color : 'green' },
    { color : 'blue-dark' },
    { color : 'blue' },
    { color : 'black-dark' },
    { color : 'black' },
    { color : 'black-light' }
  ];

}
