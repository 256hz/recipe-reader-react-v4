# RECIPE READER

<image src="/public/images/title-screen.jpg" width="200px"/>  <image src="/public/images/search-results.jpg" width="200px" />  <image src="/public/images/step.jpg" width="200px" />  <image src="/public/images/done.jpg" width="200px" />

### Overview

If you like to cook, you have probably been through the following scenario: you find a recipe on your phone, get in deep, and have to stop, wash your hands, unlock your phone, and scroll around to find the next step, for what seems like hundreds of times.  This mobile app solves that problem!  Find a great recipe and let Recipe Reader lead you through it aloud, line by line.  

To download the compiled Android app, [use this link](/public/recipe-reader.apk).  

This repo is the React Native frontend for the [Ruby on Rails API here](https://github.com/256hz/recipe-reader-rails).  It takes user input, queries the API, and puts out the pretty pictures.

### Installation (OSX)

- Go to the [Rails repo](https://github.com/256hz/recipe-reader-rails) and get the API running.
- Clone this repo.
To see the local app on your phone, use [Expo](https://github.com/expo/expo) and [Expo CLI](https://github.com/expo/expo-cli).  Follow the instructions for your machine to install.  You'll also need the Expo app on your phone.
- Make sure your phone and computer are connected to the same WiFi network.
- Run `expo start` in the project directory.  Your browser will open with the hosting information.
- Scan the QR code with the expo app on your phone

### In Progress

I am adding a number of features, including:
- Better Text-to-Speech from Google Cloud
- Speech-to-Text, also with Google Cloud
  - Voice control: next/previous step
- Search filters
- Tumbler(not Tumblr)-style step navigation
- Speech on/off control

### Thanks!
--Abe ([@256hertz](http://twitter.com/256hertz))
