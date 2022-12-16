#!/bin/sh

# docker build -t criskrus/python-test .
docker run --rm -v $(pwd):/app criskrus/python-test

# find . -name '*.py' | entr python -m unittest
