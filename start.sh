#!/bin/bash

clear

while getopts p: flag
do
    case "${flag}" in
        p) production=${OPTARG};;
    esac
done
# echo "$production"

if [ "$production" == "prod" ]
then
    npm run start:prod
else
    npm run start
fi