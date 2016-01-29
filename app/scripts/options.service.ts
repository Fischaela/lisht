import { OPTIONS } from './mock-options';
import { Injectable } from 'angular2/core';

@Injectable()

export class OptionsService {

  _optionsLocalStorage = JSON.parse( localStorage.getItem('GEILDANKE-options') );
  _optionsMockData = OPTIONS;
  _optionsToReturn = this._optionsMockData;

  getOptions() {
    if ( this._optionsLocalStorage != null ) {
      this._optionsToReturn = this._optionsLocalStorage;
    }
    return Promise.resolve( this._optionsToReturn );
  }

  setBookmarks( options : Object ) {
    localStorage.setItem( 'GEILDANKE-options', JSON.stringify( options ) );
  }

}
