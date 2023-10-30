package com.example.marsrover.application

sealed interface LandError {

    object RoverAlreadyLanded : LandError
    class UnknownError(val error: Throwable) : LandError
}
