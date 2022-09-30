import {MarsRover} from "../index";
import {Direction} from "../direction";
import {Move} from "../move";
import {Turn} from "../turn";

describe('Mars Rover', () => {
  it("should return initial position given an empty signal", () => {
    const actual = new MarsRover({
      coordinate: {x: 0, y: 0}, direction: Direction.North
    }).move({commands: []})
    expect(actual).toEqual({
      coordinate: {x: 0, y: 0}, direction: Direction.North
    })
  })

  describe('should move', () => {
    it('forward', () => {
      const actual = new MarsRover({
        coordinate: {x: 0, y: 0}, direction: Direction.North
      }).move({commands: [Move.Forward]})
      expect(actual).toEqual({
        coordinate: {x: 0, y: 1}, direction: Direction.North
      })
    });

    it('backward', () => {
      const actual = new MarsRover({
        coordinate: {x: 0, y: 1}, direction: Direction.North
      }).move({commands: [Move.Backward]})
      expect(actual).toEqual({
        coordinate: {x: 0, y: 0}, direction: Direction.North
      })
    });
  })

  describe('should turn', () => {
    it('left', () => {
      const actual = new MarsRover({
        coordinate: {x: 0, y: 0}, direction: Direction.North
      }).move({commands: [Turn.Left]})
      expect(actual).toEqual({
        coordinate: {x: 0, y: 0}, direction: Direction.West
      })
    });

    it('right', () => {
      const actual = new MarsRover({
        coordinate: {x: 0, y: 0}, direction: Direction.North
      }).move({commands: [Turn.Right]})
      expect(actual).toEqual({
        coordinate: {x: 0, y: 0}, direction: Direction.East
      })
    });
  })

});