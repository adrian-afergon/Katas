import {Position} from "./position";
import {Signal} from "./signal";


export class MarsRover {
  constructor(private position: Position) {
  }

  move(signal: Signal) {
    return this.position
  }
}