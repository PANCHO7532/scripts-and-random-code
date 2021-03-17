/*
* Quadratic function implementation by PANCHO7532 - C example
* Some kind of example for calculate some basic values of a cuadratic function
* Copyright P7COMunications LLC (c) 2021
*/
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>

int main(int argc, char *argv[]) {
    if(argc < 4) {
        printf("Usage: quadratic_func [a] [b] [c]\r\n");
        exit(0);
    }
    bool dox1x2 = true;
    float a, b, c;
    float x1x2[2];
    float xvyv[2];
    sscanf(argv[1], "%f", &a);
    sscanf(argv[2], "%f", &b);
    sscanf(argv[3], "%f", &c); 
    float sqrt_res = sqrt(pow(b, 2) - (4 * a * c));
    if(sqrt_res != sqrt_res) {
        //is nan, or well, imaginary square root
        dox1x2 = false;
    }
    if(dox1x2) {
        x1x2[0] = (-b + sqrt_res) / (2 * a);
        x1x2[1] = (-b - sqrt_res) / (2 * a);
    }
    xvyv[0] = -b / (2 * a);
    xvyv[1] = (a * pow(xvyv[0], 2)) + (b * xvyv[0]) + c;
    if(!dox1x2) {
        printf("x1, x2: (Imaginary,Imaginary)\r\n");
        printf("xy, yv: (%.1f,%.1f)\r\n", xvyv[0], xvyv[1]);
        printf("Interception: %.1f\r\n", c);
        printf("Symmetry Axis: %.1f\r\n", xvyv[0]);
        if(a < 0) {
            printf("Co-Domain: R ≤ %.1f\r\n", a);
        } else {
            printf("Co-Domain: R ≥ %.1f\r\n", a);
        }
    } else {
        printf("x1, x2: (%.1f,%.1f)\r\n", x1x2[0], x1x2[1]);
        printf("xy, yv: (%.1f,%.1f)\r\n", xvyv[0], xvyv[1]);
        printf("Interception: %.1f\r\n", c);
        printf("Symmetry Axis: %.1f\r\n", xvyv[0]);
        if(a < 0) {
            printf("Co-Domain: R ≤ %.1f\r\n", a);
        } else {
            printf("Co-Domain: R ≥ %.1f\r\n", a);
        }
    }
}