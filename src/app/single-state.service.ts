import { Injectable } from '@angular/core';

@Injectable()
export class SingleStateService {

  x = 1;
  y = 1;

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  constructor() { }

}
