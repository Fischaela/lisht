import { OPTIONS } from './mock-options';
import { Injectable } from 'angular2/core';

@Injectable()

export class OptionsService {

  _optionsLocalStorage = JSON.parse( localStorage.getItem('GEILDANKE-options') );
  _optionsMockData = OPTIONS;
  _optionsToReturn = this._optionsMockData;
  _activeColor : string;

  getOptions() {
    if ( this._optionsLocalStorage != null ) {
      this._optionsToReturn = this._optionsLocalStorage;
    }
    console.log( 'Getting', this._optionsToReturn );
    return Promise.resolve( this._optionsToReturn );
  }

  getActiveColor() {
    this.getOptions().then( _optionsLocalStorage => this._optionsLocalStorage = _optionsLocalStorage );
    for ( let i in this._optionsToReturn ) {
      if ( this._optionsToReturn[ i ].isActive ) {
        this._activeColor = this._optionsToReturn[ i ].color;
      }
    }
    return Promise.resolve( this._activeColor );
  }

  setOptions( options : Object ) {
    localStorage.setItem( 'GEILDANKE-options', JSON.stringify( options ) );
    this.getOptions();
  }

}
