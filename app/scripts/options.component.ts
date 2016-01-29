import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';

import { OptionsService } from './options.service';

@Component({
  selector: 'lisht-options',
  templateUrl: './templates/options.html',
  providers: [ OptionsService ]
})

export class OptionsComponent implements OnInit {

  public options : Object;

  constructor( private _optionsService : OptionsService ) { }

  getOptions() {
    this._optionsService.getOptions().then( options => this.options = options );
  }

  setOptions() {
    this._optionsService.setBookmarks( this.options );
  }

  ngOnInit() {
    this.getOptions();
  }

}
