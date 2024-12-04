---
title: 'Project: Free SSL Certificate'
date: '2016-01-18T00:00:00.000Z'
template: post
draft: false
slug: /posts/project-free-ssl-certificate
category: Uncategorized
tags:
- Security
- '#jay-schulman'
description: Unlock the power of SSL certificates with this comprehensive guide to
  obtaining a free, open-source SSL certificate using Let's Encrypt. Learn foundational
  Linux skills, cloud server setup, and boost your cybersecurity expertise with this
  impactful project.
---
This is the third in a series of projects you can use to improve your security stills. The ideas of these projects is something relatively simple, not too expensive and impactful to your skill set. Check out all the projects at [our projects page](https://www.jayschulman.com/project/).

Today’s project is SSL Certificates.

#### Why This Project is Impactful

The reason I picked SSL certificates and in particular this setup is that you’ll learn a bunch of foundational skills:

- **Unix/Linux:** We’re installing our system on Linux so if you’re not familiar with the operating system, you’ll get some exposure.
- **Free!** Let’s Encrypt just started offering free SSL certficates to everyone. Which makes this project go from expensive to free.
- **Open Source:** Our toolset today is completely open source so you’ll get experience all open tools.
- **Encryption:** Understanding how SSL certs work with your webserver is important.

#### Install in the Cloud

You need to have a webserver to install a certificate on a webserver. Duh. So you’ll need a server running Apache, Nginx, IIS, something like that.

You also need a domain name. Don’t have one? Don’t go buy one. Run over to [NoIP](https://www.noip.com/free) and get a free Dynamic DNS hostname. It doesn’t matter what you pick but you do need to have it setup and working before you try to request an SSL cert.

For these types of experiments, I recommend [DigitalOcean](https://www.jayschulman.com/go/digitalocean-6/). It’s the $5 cloud. Their lowest cost server is $5 a month and you get root access to the server. If you sign up [here](https://www.jayschulman.com/go/digitalocean-6/), you’ll actually get a $10 credit. So you can play around for two months. (Or run another experiment next month.) If you end up being a paying customer, I get a few bucks too.

#### Setup DigitalOcean

Each server is called a droplet. So we’ll need to setup a droplet to get started. Click on Droplets, Create Droplet and you’ll see a screen something like this:

Give your droplet a name and select the $10 size. You can try to get it to run for $5 but you need more memory. You’re also welcome to use a bigger server. But my goal here is not to give you a lightening fast experience but to give you an educational experience for a few bucks.

Next you’ll need to select the image and location.

Choose any location. For our experiment, I would pick the location closest to you. The only long term use of this VPN in the cloud is to tunnel all of your traffic through it when you’re using a WiFi hotspot. Unless you travel a ton, you’ll want something close to you.

Next select our image. If you’re a Linux guru, pick anything you’d like. If not, the examples below will assume you’re running Ubuntu. There are a few checkboxes at the end.

Finally complete your setup. You’ll be provided with your IP address and password in an e-mail and you’ll need to change it when you login. Your first setup is to login using a terminal program. The most used and most boring program is [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

#### Update and Upgrade

All of the commands will assume you’re logged in as root. Which is a really bad idea. But this is an experiment and not the real world so such is life. In most trusted environments, you’d want to login as a user and sudo to root. You won’t see that here.

I trust Ubuntu’s repositories but I don’t always trust that the version I got is updated. So the following commands will update our server to the latest versions of all of the software running on it:> apt-get update
> apt-get upgrade

#### Install a Webserver and Dependancies

For my experiment, I recommend installing Apache but you can really install webserver you want. Start with = apt-get install apache2

You should stop here and configure Apache the way you want to. That’s out of scope of this post but there are plenty of resources to get Apache working for you. We will need `git` in order to download the Let’s Encrypt client. To install `git`, run = apt-get install git

#### Download the Let’s Encrypt Client

Next, we will download the Let’s Encrypt client from its official repository via git. I recommend updating (via git) on a routine basis.

Run = git clone [https://github.com/letsencrypt/letsencrypt](https://github.com/letsencrypt/letsencrypt) /opt/letsencrypt

This will create a local copy of the official Let’s Encrypt repository under `/opt/letsencrypt`.

#### Set Up the SSL Certificate

The client will automatically obtain and install a new SSL certificate that is valid for the domains. A couple of caveats. letsencrypt has to be able to access your hostname when it runs the script. If it can’t, you’ll get an error. So make sure everything is setup before running the script.

Run the following commands to generate a certificate = cd /opt/letsencrypt
./letsencrypt-auto --apache -d yourhostname.com

Let’s Encrypt will install everything you need to generate your certificate. You will then be presented with a step-by-step guide to customize your certificate options. You will be asked to provide an email address for lost key recovery and notices, and you will be able to choose between enabling both `http` and `https` access or force all requests to redirect to `https`.

When the installation is finished, you should be able to find the generated certificate files at `/etc/letsencrypt/live`. You can verify the status of your SSL certificate by heading to [SSL Labs](https://www.ssllabs.com/ssltest) to test your certificate.