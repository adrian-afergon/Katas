import unittest

from src.main import calculate_years_to_gain_population
import pytest


def test_should_not_growth_without_growing_conditions():
    result = calculate_years_to_gain_population(1500, 0, 0, 1500)
    assert result == 0

def test_should_not_growth_when_final_population_is_lower_than_initial():
    result = calculate_years_to_gain_population(1500, 0, 0, 1000)
    assert result == 0

@pytest.mark.parametrize("initial_population,growth_percentage,growth_per_year,final_population,expected", [
    (1000, 10, 0, 1100, 1),
    (1000, 10, 0, 1600, 5), # 1000 -> 1100 -> 1210 -> 1331 -> 1464.1 -> 1610.51
])
def test_should_growth_population_by_percentage(initial_population, growth_percentage, growth_per_year,
                                          final_population, expected):
    result = calculate_years_to_gain_population(initial_population, growth_percentage, growth_per_year,
                                                final_population)
    assert result == expected

@pytest.mark.parametrize("initial_population,growth_percentage,growth_per_year,final_population,expected", [
    (1500, 0, 100, 1600, 1),
    (1500, 0, 100, 1700, 2),
    (1500, 0, 100, 1800, 3)
])
def test_should_growth_population_by_year(initial_population, growth_percentage, growth_per_year,
                                          final_population, expected):
    result = calculate_years_to_gain_population(initial_population, growth_percentage, growth_per_year,
                                                final_population)
    assert result == expected


@pytest.mark.parametrize("initial_population,growth_percentage,growth_per_year,final_population,expected", [
    (1500, 5, 100, 5000, 15),
    (1500000, 2.5, 10000, 2000000, 10)
])
def test_should_growth_population(initial_population, growth_percentage, growth_per_year,
                                          final_population, expected):
    result = calculate_years_to_gain_population(initial_population, growth_percentage, growth_per_year,
                                                final_population)
    assert result == expected

if __name__ == '__main__':
    unittest.main()
