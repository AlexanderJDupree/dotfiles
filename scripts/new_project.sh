#!/bin/bash
mkdir include
mkdir obj
mkdir obj/debug
touch obj/.keep
touch obj/debug/.keep
mkdir tests
mkdir tests/obj/
mkdir tests/obj/debug/
touch tests/obj/.keep
touch tests/obj/debug/.keep
mkdir src

cp ~/CS163_Programs/program2/makefile makefile
cp -r ~/CS163_Programs/program2/third_party/ third_party/
touch main.cpp 

