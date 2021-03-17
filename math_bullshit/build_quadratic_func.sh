#!/bin/bash
if [ ! -d "./build" ]; then
    mkdir build
fi
gcc -o build/quadratic_func -Wall quadratic_func.c -lm
exit