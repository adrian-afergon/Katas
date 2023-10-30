package com.example.marsrover.application

import arrow.core.Either
import com.example.marsrover.domain.Rover

interface RoversRepository {
    fun save(rover: Rover): Either<Throwable, Unit>
    fun saveOrElse(rover: Rover, onError: (Throwable) -> LandError): Either<LandError, Rover>

}
