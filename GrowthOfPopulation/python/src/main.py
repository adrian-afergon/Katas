def calculate_years_to_gain_population(initial_population: int,
                                       growth_percentage: float,
                                       growth_per_year: int,
                                       final_population: int):
    growth_factor = growth_percentage / 100

    years = 0
    next_year_population = initial_population
    while next_year_population < final_population:
        next_year_population = __calculate_next_year_population(growth_factor, growth_per_year, next_year_population)
        years += 1

    return years


def __calculate_next_year_population(growth_factor, growth_per_year, current_population):
    return current_population + (current_population * growth_factor) + growth_per_year
