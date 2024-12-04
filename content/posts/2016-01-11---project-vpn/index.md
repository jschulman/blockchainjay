---
title: "Project: VPN"
date: "2016-01-11T00:00:00.000Z"
template: "post"
draft: false
slug: "/posts/project-vpn"
category: "Uncategorized"
tags:
  - "Security"
  - "#jay-schulman"
description: "This is the second in a series of projects you can use to improve your security stills. The ideas of these projects is something relatively…"
---


This is the second in a series of projects you can use to improve your security stills. The ideas of these projects is something relatively simple, not too expensive and impactful to your skill set. This first project was on [intrusion detection](https://www.jayschulman.com/project-intrusion-detection/).

Today’s project is VPN.

#### Why This Project is Impactful

The reason I picked VPN and in particular this setup is that you’ll learn a bunch of foundational skills:

- **Unix/Linux:** We’re installing our system on Linux so if you’re not familiar with the operating system, you’ll get some exposure.
- **Open Source:** Our toolset today is completely open source so you’ll get experience all open tools.
- **Encryption:** Getting a VPN to work is actually far more complicated than you’d imagine. The key (no pun intended) is that you’ve matched up the same encryption algorithms on each side. All of the sudden, you’ll start learning the multiple different encryption methods that make up a single VPN connection.
- **Networking: **Also complicated. Getting the traffic to route through your computer to the remote VPN. Then getting the VPN server to route traffic to the right location. It’s a good lesson in networking.
- **Privacy: **When you’ve got your VPN connected, I encourage you to fire up Wireshark (or another packet capture tool) so you can see what packets still escape the VPN. This is important in thinking through how VPNs keep data private.

#### Install in the Cloud

I have mine installed on my home network. It allows me to VPN into my home network to access things that aren’t available otherwise. But if you’re at home trying to do this experiment it kinda doesn’t work. So to make life easy, put your VPN in the cloud.

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

#### OpenVPN

OpenVPN is the de facto open source VPN software. Is it easy to use? Nope. But it is extremely powerful and worth understanding how it works. Additionally, it’s fully supported on just about every platform. Just about any client you want to connect to it, there is software that will make it happen. Let’s get it installed:> apt-get install openvpn easy-rsa

Easy_rsa makes it easy to generate some of the keys needed to configure the VPN.

Let’s run some commands to set everything up:> make-cadir /etc/ca
> cd /etc/ca
> vi vars

First, I’m a big fan of vi. Sorry if it’s not your thing. Use a text editor you’re comfortable with. We’re creating a directory for our files. We run a program called make-cadir which builds all of the files you need in that directory and then we open up the configuration file.

In the configuration file you’ll see keylength and lifetime of the certificate. Set them to what you’d like. I suggest 4096 bits for keylength and a year for the certificate but since this is an experiment, whatever you’d like will work.source ./vars → This “sources” or loads the vars document you edited above../clean-all → This will remove any previous keys, if there are any../build-ca → This final line builds your certificate authority.

This is how I filled out the build-ca questions = Next run:./build-key-server [common name from above, mine was vpn.jayschulman.com]Here are my answers to the build-key-server = Create UsersThat setups the server side certificates. Next week need to setup the client side certificates.For each user you want to access your VPN, you need to create a client side certificate. You do this here:./build-key-pass UserNameSet a password for the certificate.

#### Diffie-HellmanTime to generate the Diffie-Hellman key exchange. This is definitely an educational part of the exercise. If you remember the Logjam vulnerability (read more [here](https://weakdh.org/)), it is a vulnerability due to weak diffie-hellman encryption.  That said, let's create some prime numbers../build-dh

#### HMAC KeyThe next step is generating a static pre-shared hash-based message authentication code (HMAC) key. With this in place, the server won't respond unless it detects this static key first.Generate the static HMAC key with the following line = openvpn –-genkey –-secret keys/ta.key

#### Configure OpenVPNWow. Exhausted and we haven't even configured OpenVPN. Let's go create /etc/openvpn/server.conf in your favorite text editor. Here is my cheat sheet = local 192.168.2.0 # SWAP THIS WITH THE IP OF YOUR SERVER
dev tun 
proto udp # I like running mine on tcp, port 443 but do whatever you'd like.
port 1194 
ca /etc/ca/keys/ca.crt 
cert /etc/ca/keys/Server.crt # SWAP WITH YOUR CRT NAME
key /etc/ca/keys/Server.key # SWAP WITH YOUR KEY NAME
dh /etc/ca/keys/dh2048.pem
server 10.8.0.0 255.255.255.0 
# server and remote endpoints 
ifconfig 10.8.0.1 10.8.0.2 
# Add route to Client routing table for the OpenVPN Server 
push "route 10.8.0.1 255.255.255.255" 
# Add route to Client routing table for the OpenVPN Subnet 
push "route 10.8.0.0 255.255.255.0" 
# your local subnet 
push "route 192.168.2.0 255.255.255.0" # SWAP THE IP NUMBER WITH YOUR RASPBERRY PI IP ADDRESS
# Set primary domain name server address to the SOHO Router 
# If your router does not do DNS, you can use Google DNS 8.8.8.8 
push "dhcp-option DNS 192.168.2.1" # This should already match your router address and not need to be changed.
# Override the Client default gateway by using 0.0.0.0/1 and 
# 128.0.0.0/1 rather than 0.0.0.0/0. This has the benefit of 
# overriding but not wiping out the original default gateway. 
push "redirect-gateway def1" 
client-to-client 
duplicate-cn 
keepalive 10 120 
tls-auth /etc/ca/keys/ta.key 0 
cipher AES-128-CBC 
comp-lzo 
user nobody 
group nogroup 
persist-key 
persist-tun 
status /var/log/openvpn-status.log 20 
log /var/log/openvpn.log 
verb 1(This config file is adapted from [this github repo](https://gist.github.com/laurenorsini/9925434).)

#### Create an .ovpn fileYou'll need a file that tells each of your clients how to connect to the VPN. It's called an ovpn file. Here is the cheat sheet on that (since it goes on your client's computer, you can create and call the file anything):client
dev tun
proto udp
remote  1194
resolv-retry infinite
nobind
persist-key
persist-tun
mute-replay-warnings
ns-cert-type server
key-direction 1
cipher AES-128-CBC
comp-lzo
verb 1
mute 20-----BEGIN CERTIFICATE-----
(Copy and insert content of ca.crt) …
-----END CERTIFICATE----------BEGIN CERTIFICATE-----
(Copy and insert content of UserName.crt) …
-----END CERTIFICATE----------BEGIN RSA PRIVATE KEY-----
(Copy and insert content of UserName.3des.key) …
-----END RSA PRIVATE KEY-----#
# 2048 bit OpenVPN static key
#
-----BEGIN OpenVPN Static key V1-----
(Copy and insert content of ta.key) …
-----END OpenVPN Static key V1-----Get an OpenVPN ClientThere are so many openvpn clients available, I don't know where to start. Go google one for your platform. You shouldn't have to pay for it and find something that works for you.Copy the ovpn file we created, fire it up and see if your VPN works. If not, the learning has just begun!For a great resource that I used to build this post and my VPN, check out this [SANS article](https://www.sans.org/reading-room/whitepapers/hsoffice/soho-remote-access-vpn-easy-pie-raspberry-pi-34427).
