import {Position} from "./position";
import {Direction} from "./direction";
import {Signal} from "./index";

export class Panel {
  deployRover() {}
  sendCommands(signal: Signal) {}
  whereIsTheRover(): Position {
    return {
      coordinate: {
        x: 0, y: 0
      },
      direction: Direction.North
    }

  }
}