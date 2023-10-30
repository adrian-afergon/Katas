package com.example.marsrover.domain

import arrow.core.Either

class Rover {
    companion object {
        fun <Error> createOrElse(id: RoverId, position: Position, onError: () -> Error): Either<Error, Rover> {
            TODO("Not yet implemented")
        }
    }

}
