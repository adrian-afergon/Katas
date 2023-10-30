package com.example.marsrover.application

import arrow.core.Either
import arrow.core.raise.either
import com.example.marsrover.application.LandError.RoverAlreadyLanded
import com.example.marsrover.domain.Rover
import com.example.marsrover.domain.RoverId

class LandCommandHandler(
        private val repository: RoversRepository
) {
    fun handle(command: LandCommand): Either<LandError, Unit> = either {
        with(command) {
            val rover = Rover.createOrElse(RoverId.create(""), position) { RoverAlreadyLanded }.bind()
            repository.saveOrElse(rover) { LandError.UnknownError(it) }.bind()
        }
    }

}