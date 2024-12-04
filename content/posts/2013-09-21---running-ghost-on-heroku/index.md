---
title: Running Ghost on Heroku
date: '2013-09-21T00:00:00.000Z'
template: post
draft: false
slug: /posts/running-ghost-on-heroku
category: Technology
tags:
- Technology
- '#jay-schulman'
description: Learn how to effortlessly deploy Ghost on Heroku with a few simple tweaks
  in your config.js file. Follow our step-by-step guide to set up, test, and push
  your Ghost blog live in no time!
---
Running Ghost ([http://ghost.org](https://www.jayschulman.com/wp-content/uploads/2013/09/ghost.org)) on Heroku is so easy, I’m suprised I didn’t find instructions already.

#### TL;DR

If you already know how to implement Node.js on Heroku, there is only one change to make:

In config.js:

Change all instances of:

    port: 2368

To:

    port: process.env.PORT || 3000

This will call the heroku dynamic port variable or if none exists, use port 3000.

#### Step-by-Step Instructions

#### Installing Node.js

Ghost requires node 0.10.* (latest stable version).

To get it visit [http://nodejs.org](https://www.jayschulman.com/wp-content/uploads/2013/09/nodejs.org) and press ‘install’ to download the latest stable version of Node.js.

Windows
The install button will download an .msi installer file. Double click this and follow the instructions to install Node.js as you would any other software.
Mac
The install button will download a .dmg. Install this as you would any other software.

#### Installing Ghost

Download the latest version of Ghost from Ghost.org. Unzip the archive to a memorable location.

#### Local workstation setup

Install the [Heroku Toolbelt](https://www.jayschulman.com/wp-content/uploads/2013/09/toolbelt.heroku.com) on your local workstation. This ensures that you have access to the Heroku command-line client, Foreman, and the Git revision control system.

#### Declare process types with Procfile

Use a Procfile, a text file in the root directory of your application, to explicitly declare what command should be executed to start a web dyno. In this case, you simply need to execute the Node script using node.
Here’s a Procfile for Ghost:

    web: node index.js

#### Edit Config.js for Heroku

In config.js:

Change all instances of:

    port: 2368

To:

    port: process.env.PORT || 3000

This will call the heroku dynamic port variable, or if none exists use port 3000.

#### Test that it works locally

Run:

    foreman start

This will start Ghost locally on your workstation running on port 3000.

#### Store your app in Git

Let’s put it into Git:

    $ git init$ git add .$ git commit -m "init"

#### Deploy your application to Heroku

Create the app:

    $ heroku create

Deploy your code:

    $ git push heroku master

#### Open on Heroku

Ghost should now be running on Heroku.

To load Ghost from Heroku, go to your unique Heroku URL or type:

    heroku open

#### Good luck!