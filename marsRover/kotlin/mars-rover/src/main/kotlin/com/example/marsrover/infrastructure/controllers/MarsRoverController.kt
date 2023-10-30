package com.example.marsrover.infrastructure.controllers

import arrow.core.Either
import com.example.marsrover.application.LandCommand
import com.example.marsrover.application.LandCommandHandler
import com.example.marsrover.domain.Position
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.net.URI
import org.springframework.web.bind.annotation.RestController


@RestController
class MarsRoverController (
        private val handler: LandCommandHandler
){

    @GetMapping("/rovers/{id}")
    fun info (@PathVariable id: String): ResponseEntity<*> {
        TODO("Not yet implemented")
//        return ResponseEntity.status(200).build<Any>()
    }

    @PostMapping("/rovers")
    fun land (): ResponseEntity<*> {
        val id = "123"
        return handler.handle(LandCommand(Position())).toServerResponse(
            { return ResponseEntity.created(URI("/rovers/${id}")).build<Any>() },
            { return ResponseEntity.status(500).build<Any>() },
        )
    }

    @PutMapping("/rovers/{id}/move")
    fun move (@PathVariable id: String): ResponseEntity<*> {
        TODO("Not yet implemented")
//        return ResponseEntity.ok().build<Any>()
    }

}

inline fun <E, R> Either<E, R>.toServerResponse(
        onValidResponse: (R) -> ResponseEntity<*>,
        onError: (E) -> ResponseEntity<*>
): ResponseEntity<*> = fold({ onError(it) }, { onValidResponse(it) })