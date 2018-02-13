import {Library, types} from 'ffi';
import {LinkProvider} from './link-provider';
import {Injectable} from '@angular/core';
import * as path from 'path';

@Injectable()
export class PrecompiledLibraryLinkService implements LinkProvider {
  lib;

  constructor() {
    this.lib = new Library(path.resolve(__dirname, 'native-artifacts/precompiled-libraries/simplelib'), {'getString': [types.CString, []]});
  }

  getLink(): string {
    return this.lib.getString();
  }
}