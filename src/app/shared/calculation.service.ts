import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {

    constructor() { }

    addItems(val1: number, val2: number): Promise<number> {
        return Promise.resolve(val1 + val2);
    }

    multiItems(val1: number, val2: number): number{
        return val1 * val2;
    }
}

@Injectable()
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}