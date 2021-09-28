#!/bin/bash

echo "staging code"
git add .

echo "commiting changes"
git commit -m "$1"

echo "pulling changes from remote repo"
git pull origin master