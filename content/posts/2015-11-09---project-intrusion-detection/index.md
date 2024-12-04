---
title: "Project: Intrusion Detection"
date: "2015-11-09T00:00:00.000Z"
template: "post"
draft: false
slug: "/posts/project-intrusion-detection"
category: "Security"
tags:
  - "Security"
  - "#jay-schulman"
description: "This starts the first in a series of projects you can use to improve your security skills. The ideas of these projects is something…"
---


This starts the first in a series of projects you can use to improve your security stills. The ideas of these projects is something relatively simple, not too expensive and impactful to your skill set.

Today’s project is Intrusion Detection.

#### Why This Project is Impactful

The reason I picked Intrusion Detection and in particular this setup is that you’ll learn a bunch of foundational skills:

- **Unix/Linux:** We’re installing our system on Linux so if you’re not familiar with the operating system, you’ll get some exposure.
- **Open Source:** Our toolset today is completely open source so you’ll get experience using an open source IDS platform.
- **Cloud:** I’m recommending you install this in the cloud. I’ll explain below why but this exercise will give you a relatively basic example of cloud computing.
- **Threat Intelligence: **You’ll be monitoring the internet. I actually don’t recommend you run anything on your host so everything you see will be drive-by attacks. No specific reason, these are just the mass scanning types of attacks.
- **Intrusion Detection: **It’s a foundational component to information security. In the grand scheme of things, most organizations have it under control. That said, for all of the reasons above, it’s a great exercise.

#### Install in the Cloud

If you install it on your home internet, you’re viewing a specific traffic pattern that I don’t think is necessarily representative of the Internet. Most attackers know the IP blocks of cable and DSL modems. So the attacks they’re trying are geared toward home computing. For our exercise, I think seeing more commercial, service based attacks is a better view of the internet.

For these types of experiments, I recommend [DigitalOcean](https://www.jayschulman.com/go/digitalocean-6/). It’s the $5 cloud. Their lowest cost server is $5 a month and you get root access to the server. If you sign up [here](https://www.jayschulman.com/go/digitalocean-6/), you’ll actually get a $10 credit. So you can play around for two months. (Or run another experiment next month.) If you end up being a paying customer, I get a few bucks too.

#### Setup DigitalOcean

Each server is called a droplet. So we’ll need to setup a droplet to get started. Click on Droplets, Create Droplet and you’ll see a screen something like this:

Give your droplet a name and select the $10 size. You can try to get it to run for $5 but you need more memory. You’re also welcome to use a bigger server. You’ll see that the server will get pretty slow the more data you collect. But my goal here is not to give you a lightening fast experience but to give you an educational experience for a few bucks.

Next you’ll need to select the image and location.

Choose any location. For our experiment, it would be interesting to compare what New York attacks look like compared to Frankfurt or Toronto. It’s great to pick something close as it will be a bit faster, but really pick something that interests you from a threat intelligence perspective. I picked Singapore for my experiment and FYI it is slow from Chicago.

Next select our image. If you’re a Linux guru, pick anything you’d like. If not, the examples below will assume you’re running Ubuntu. There are a few checkboxes at the end. I checked IPv6 for kicks as I am curious what attacks are coming on IPv6 versus IPv4. Again, education!

Finally complete your setup. You’ll be provided with your IP address and password in an e-mail and you’ll need to change it when you login. Your first setup is to login using a terminal program. The most used and most boring program is [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

#### Update and Upgrade

All of the commands will assume you’re logged in as root. Which is a really bad idea. But this is an experiment and not the real world so such is life. In most trusted environments, you’d want to login as a user and sudo to root. You won’t see that here.

I trust Ubuntu’s repositories but I don’t always trust that the version I got is updated. So the following commands will update our server to the latest versions of all of the software running on it:> apt-get update
> apt-get upgrade

#### Install Snort

Our Intrusion Detection System will be Snort. It’s the most documented and supported open source system out there and is relatively easy to install on Ubuntu.> apt-get install snort

During the install, it will ask you for the protected subnet. You’ll put your ip address of the DigitalOcean server.

#### Configure Rules

A lot of interesting rules are turned off by default. Go to your favorite command line editor in Linux (vi, pico, etc) and edit /etc/snort/snort.conf.

In this file, you’ll want to go WAY down to the end where there are tons of include lines that has a line for each ruleset. If you see a # in front of the ruleset, it’s been disabled. Remove the # to enable it. To start, turn as much as you want on. When it gets boring, turn it off and focus on what is interesting. They’ll look something like this = include $RULE_PATH/web-misc.rules
include $RULE_PATH/web-php.rules
include $RULE_PATH/x11.rules
# include $PREPROC_RULE_PATH/preprocessor.rules
# include $PREPROC_RULE_PATH/decoder.rules
# include $PREPROC_RULE_PATH/sensitive-data.rules

#### Test Snort

You have the most basic version of snort installed. At this point, I want to make sure you’re seeing Snort find attacks. So let’s run a command>snort -d -A console -u snort -g snort -c /etc/snort/snort.conf -i eth0

If all goes well, you should start seeing alerts on your screen for attacks. So side note: I did pick Singapore because, well, I thought I’d see a ton of attacks. I don’t really. So if you don’t see any alerts pop up… oops! Move on to the next step and move to your next level of learning. Just the fact that you got it looking for attacks is a success!

#### Pivot

This is the point in time where you need to figure out what you want to learn next. Here are a couple of resources:

- Build a web front end for Snort using Snorby: [http://blog.muhammadattique.com/installing-snorby-on-ubuntu-for-snort-with-barnyard2/](http://blog.muhammadattique.com/installing-snorby-on-ubuntu-for-snort-with-barnyard2/)
- Send all Snort alerts to a Database and use BASE as a front end: [http://computer-outlines.over-blog.com/article-nids-snort-barnyard2-apache2-base-with-ubuntu-14-04-lts-123532107.html](http://computer-outlines.over-blog.com/article-nids-snort-barnyard2-apache2-base-with-ubuntu-14-04-lts-123532107.html)

Just remember, this is about achieving a learning objective. Play and enjoy. Even though I’ve zoomed through everything, it doesn’t mean you can’t go back and read the snort rules (/etc/snort/rules) or look through configuration files, etc. Again, the objective isn’t to get something working but to learn something new.
