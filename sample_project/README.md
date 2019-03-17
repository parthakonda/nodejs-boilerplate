# Setup instructions

## Requirements
    Node==10.14.2

## Clone the code
    cd ~/
    git clone git@github.com:parthakonda/nodejs-boilerplate.git

## Install the packages
    cd ~/nodejs-boilerplate/sample_project
    npm install

## Run Dev Server
    npm start

## To run tests
    npm test

## Deploy in production
    cd ~/nodejs-boilerplate/sample_project
    pm2 start process.yml

## To see logs
    pm2 logs

## To stop the prod server
    pm2 stop all

## To restart the prod server
    pm2 restart all

## To see docs
    npm run docs

## To clean docs
    npm run clean

## To prettify the code
    npm run pretty

## To lint the code
    npm run lint

## To see the coverage
    npm run coverage

## Working with command line options
    npm link

## Command to runserver
    cd ~/nodejs-boilerplate/sample_project
    npm start
