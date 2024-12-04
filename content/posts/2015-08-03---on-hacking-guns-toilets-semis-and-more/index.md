---
title: On Hacking Guns, Toilets, Semis and More
date: '2015-08-03T00:00:00.000Z'
template: post
draft: false
slug: /posts/on-hacking-guns-toilets-semis-and-more
category: Technology
tags:
- medium
- jay-schulman
description: Explore the sensationalized world of hacking at Blackhat, as we delve
  into vulnerabilities in smart guns, toilets, and truck tracking systems. Learn to
  focus on real security risks, not media hype.
---
Starting in late July every year, we start hearing about fantastic *hacks* that are going to get presented at Blackhat. The media jumps at the opportunity to report on sensational stories of hacking a refrigerator with a toothpick and an iPad while sitting in the backseat of an Uber. [Wired Magazine](http://www.wired.com/category/security) is almost 100% reporting on presentations at Blackhat.

First, in each of these cases, a researcher spent a lot of time testing and creating a presentation around a vulnerability in these devices. Kudos to them for investigating and finding a vulnerability. My issue is in the FUD — fear, uncertainty, and doubt — that the media creates around these otherwise rarely exploited vulnerabilities.

#### What You Shouldn’t Pay Attention To

Let’s take a look at three recent Blackhat/Defcon presentations around vulnerabilities in *Internet of Things *type of devices.

#### **The TrackingPoint Smart Rifle**

Read more: [http://www.smh.com.au/digital-life/digital-life-news/smart-rifle-hacked-to-miss-target-hit-another-20150731-giog71.html#ixzz3hi7Fmvii](http://www.smh.com.au/digital-life/digital-life-news/smart-rifle-hacked-to-miss-target-hit-another-20150731-giog71.html#ixzz3hi7Fmvii)

***Vulnerability: ***A hacker can “change variables in the scope’s calculations that make the rifle inexplicably miss its target, permanently disable the scope’s computer, or even prevent the gun from firing.”

“You can make it lie constantly to the user so they’ll always miss their shot,” Sandvik told Wired. “If the scope is bricked, you have a six to seven thousand dollar computer you can’t use on top of a rifle that you still have to aim yourself.”

***Reality: ***“They said one thing they could not do was cause the gun to fire without the trigger being pulled.”

“Due to financial difficulty TrackingPoint will no longer be accepting orders,” a message on the company’s home page in May read, according to Ars Technica. According to some estimates, there are only about a thousand TrackingPoint rifles in the hands of consumers, and some do not have Wi-Fi. The feature can also be turned off. “The fundamentals of shooting don’t change even if the gun is hacked,” John McHale, TrackingPoint’s founder said.

***Sensational Quote: ***Hacking a dangerous rifle can be terrifying, and companies making such weapons should deploy a strict security system for their products so that they cannot be hacked at all. — [TechTimes](http://www.techtimes.com/articles/72973/20150731/hackers-can-take-control-or-disable-trackingpoint-sniper-rifles.htm)

#### **Satis Smart Toilet**

Read more: [http://www.dailymail.co.uk/sciencetech/article-2384826/Satis-smart-toilets-Japan-hacked-hijacked-remotely.html](http://www.dailymail.co.uk/sciencetech/article-2384826/Satis-smart-toilets-Japan-hacked-hijacked-remotely.html)

***Vulnerability: ***By using an Android app called ‘My Satis’ over a Bluetooth connection, users can raise and lower the lid, operate a bidet function and flush the toilet. While this might perhaps seem like a good idea, a pin for the Bluetooth app is set at ‘0000’ and can therefore be used by anyone — even remotely. Trustwave therefore believes that this could leave toilet users open to attacks by mischievous technophiles.

***Reality: “***An attacker could… cause the toilet to repeatedly flush, raising the water usage and therefore utility cost to its owner.”

“Attackers could cause the unit to unexpectedly open/close the lid, [or] activate bidet or air-dry functions, causing discomfort or distress to user.”

I remember calculating how large of a water bill you could run up using Chicago’s water costs. I’m not sure it was even over $100 for what is a very expensive toilet.

***Sensational Quote: ***It’s **“**causing commode chaos across Japan.”

#### **Global Star Semi-Truck Tracking System**

Read more: [http://www.wired.com/2015/07/hackers-heist-semis-exploiting-satellite-flaw/](http://www.wired.com/2015/07/hackers-heist-semis-exploiting-satellite-flaw/)

***Vulnerability: ***Hackers can disable the location-tracking device used to monitor it, then spoof the coordinates to make it appear as if a hijacked shipment was still traveling its intended route. Or a hacker who just wanted to cause chaos and confusion could feed false coordinates to companies and militaries monitoring their assets and shipments to make them think they’d been hijacked

***Reality: ***This is line of sight. So you can only track trucks as they pass by wherever you’re monitoring them. The Globalstar system is a simplex — or one way — system. The vulnerability described requires you to turn off the tracking system and send a fake signal to Globalstar or inject fake tracking signals to confuse the actual location.

Your opportunity to use this vulnerability is very low.

***Sensational Quote: ***“Can I find a diamond shipment or a nuclear shipment that it can track?”

#### What You Should Pay Attention To

What you should pay attention to is how things get broken. What are the abuse cases that you can think through in your applications to make sure the same thing doesn’t happen to you. Let’s take a look at the root cause issue of these three vulnerabilities.

**Gun: **Poorly configured and secured WiFi connectivity to the gun.

**Toilet: **The toilet uses the default 0000 passcode for Bluetooth.

**Tracking System: **Unencrypted and reversible messaging system.

That is what you should be paying attention to. As you build, assess, and remediate things in your environment, these are the risks that you should be thinking through on your systems.

Are you securing connectivity to your systems? Are you using default passwords? Is your messaging system unencrypted?

Don’t fall for the media hype, but do think through how these types of vulnerabilities changes the threat landscape to devices that you’re working and playing with on a regular basis.