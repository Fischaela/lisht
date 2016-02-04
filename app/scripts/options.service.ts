import { OPTIONS } from './mock-options';
import { Injectable } from 'angular2/core';

@Injectable()

export class OptionsService {

  _optionsLocalStorage = JSON.parse( localStorage.getItem('GEILDANKE-options') );
  _optionsMockData = OPTIONS;
  _activeColor : string;

  getColors() {
    return Promise.resolve( this._optionsMockData );
  }

  getActiveColor() {
    if ( !this._activeColor || this._activeColor === '' ) {
      this._activeColor = 'pink';
    }
    if ( this._optionsLocalStorage != null ) {
      this._activeColor = this._optionsLocalStorage;
    }
    return Promise.resolve( this._activeColor );
  }

  setActiveColor( activeColor : string ) {
    localStorage.setItem( 'GEILDANKE-options', JSON.stringify( activeColor ) );
    this._activeColor = activeColor;
  }

}
