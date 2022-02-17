# image processing API 

# Udacity Advanced Full-Stack Web Development Nanodegree Program

# Table of Contents
 * Introduction
 * Roadmap
 * Getting Started
 * Image Processing
 * Refrencies
 * Contacts


# Introduction
 In this project, I built an API that is used to resize an image using sharp by placing them in the endpoint with its size parameters and saving the newly resized image in a destination folder at the disk.
And use the resized image in further requests, and it doesn't resize it twice with the same parameters.
I used :
* node.js, and TypeScript for creating API and processing.
* Prettier code formatter for reformats my code  
* Eslint tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, to make code more consistent and avoid bugs.
*  Jasmine for testing code from errors.


# Roadmap
* Prepare an initial folder for the project
   * Create folders and files
   * Ensure there is the node.js is installed 
   * Install all dependencies and devdDependencies and configure them

* Build the server and the middleware
* create the necessary modules
* use Get method and Sharp to process image
* Formatted the code using Prettier, getting the report, and fix patterns found in TS code using EsLint
* create Jasmine test code
    
    
# Getting Started
* Installing Dependencies
* npm run test  : Build js folder and Run Jasmine test  
* npm run strat : start the server with TypeScript 
* npm run js    : start the server with JavaScript 
Or
* npm run build : Build js folder
* npm run js      : start the server with JavaScript 

# Image Processing
For resize image existing at folder orginal, in the endepoint put the image name with its size parameter like that:

/api/?filename=<filename>&width=<width>&height=<height> 

Example:
api/?filename=encenadaport.jpg&width=300&height=300


# References
* The classroom of Udacity Advanced Full-Stack Web Development Nanodegree Program
* The weekly sessions with Eng.Alaa Sayed
* The amazing team of Udacity at slack
* Node.js docs https://www.geeksforgeeks.org/node-js-path-resolve-method/
* Processing image with sharp docs 
   * https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp
   * https://stackoverflow.com/questions/58508690/how-to-resize-an-image-in-sharp-with-the-option-contain-but-preserve-the-aspec
   * https://sharp.pixelplumbing.com/api-resize
* multiple module.exports in Node.js docs
   * https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
   * https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
* Jasmine docs https://jasmine.github.io/api/2.7/matchers.html
* Eslint docs https://eslint.org/docs/user-guide/command-line-interface


# Contacts
Name   : Wael Ibarahim Abdlmeged
Email  : tatweir15@gmail.com

