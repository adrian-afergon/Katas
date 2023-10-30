package com.example.marsrover

import com.example.marsrover.application.LandCommandHandler
import com.example.marsrover.application.RoversRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class SpringConfig {
    @Bean
    fun landCommandHandler(
        repository: RoversRepository
    ): LandCommandHandler = LandCommandHandler(repository)

}
