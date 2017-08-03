# MarvelCode-Week4
Autocomplete app for all distinct marvel characters

## Introduction Idea

Our website that give you ability to input text into input field which will give you back sensible suggestion related to Marvel's  Characters .


##  User Stories

>As a Marvel's enthusiast, I want to be able to enter a string into an input box which gives back a list of  `Marvel's Characters  Name`, so that I can easily search for Marvel's  name which I want .


## Timeline

* Day 1:

   *  Modularisation

* Day 2:

  * Testing
  * Deploying on Heroku


## Heroku

Make sure that `port` is declared in `server.js` as below, in order for successful deployment on Heroku. Heroku needs process.env.PORT, as it won't recognise 4000.

`var port = process.env.PORT || 4000;`

## What we learn!!

  * How to initialize a project's package.json.
  * Creating a basic http server.
  * Creating a router for your server.
  * Learning how to use the fs core module to read and write from the file system.
  * Learning how to communicate with your http server from the front-end.
  * Setting up nodemon for your development environment.
  * Learning about how to modularise your server code.


## How to use ?
 * User Side :

    * Open url for the website .
    * Write the `Marvel's Characters` name in the  input box bellow.
    * click on any itemList to search about it in Google .


  * Developer Side:

      ` git clone https://github.com/FACG2/MarvelCode-Week4`

      Run `npm install` to install all dependencies`

      Run  `node src/server.js `

Navigate to http://localhost:4000/ in your browser

[check the site](https://marvel-week4.herokuapp.com/)

>Done By : Abdallah,Mahmoud,Aia,Salwa
