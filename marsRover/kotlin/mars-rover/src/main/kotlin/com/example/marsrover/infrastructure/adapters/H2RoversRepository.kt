package com.example.marsrover.infrastructure.adapters

import arrow.core.Either
import com.example.marsrover.application.LandError
import com.example.marsrover.application.RoversRepository
import com.example.marsrover.domain.Rover
import org.springframework.stereotype.Component

@Component
class H2RoversRepository: RoversRepository {
    override fun save(rover: Rover): Either<Throwable, Unit> {
        TODO("Not yet implemented")
    }

    override fun saveOrElse(rover: Rover, onError: (Throwable) -> LandError): Either<LandError, Rover> {
        TODO("Not yet implemented")
    }
}