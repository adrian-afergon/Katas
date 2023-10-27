package com.example.marsrover

import org.springframework.boot.fromApplication
import org.springframework.boot.test.context.TestConfiguration
import org.springframework.boot.with

@TestConfiguration(proxyBeanMethods = false)
class TestMarsRoverApplication

fun main(args: Array<String>) {
    fromApplication<MarsRoverApplication>().with(TestMarsRoverApplication::class).run(*args)
}
