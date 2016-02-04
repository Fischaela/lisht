import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { NgClass } from 'angular2/common';

import { OptionsService } from './options.service';

@Component({
  selector: 'lisht-options',
  templateUrl: './templates/options.html',
  directives: [ NgClass ]
})

export class OptionsComponent implements OnInit {

  public options : Object;
  public activeColor : string;

  constructor( private _optionsService : OptionsService ) { }

  getOptions() {
    this._optionsService.getColors().then( options => this.options = options );
    this._optionsService.getActiveColor().then( activeColor => this.activeColor = activeColor );
  }

  setActiveColor( index : number ) {
    this.activeColor = this.options[ index ].color;
    this._optionsService.setActiveColor( this.activeColor );
  }

  ngOnInit() {
    this.getOptions();
  }

}
