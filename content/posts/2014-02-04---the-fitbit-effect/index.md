---
title: The FitBit Effect
date: '2014-02-04T00:00:00.000Z'
template: post
draft: false
slug: /posts/the-fitbit-effect
category: Technology
tags:
- Technology
- jay-schulman
description: Explore the evolving world of Bluetooth-enabled medical devices and the
  crucial need for robust data security. Learn how to safeguard sensitive health information
  in this new era of mobile connectivity.
---
Since 2008, Fitbit has been monitoring the number of steps I have taken along with the amount and quality of sleep I get (unfortunately not as much as I would like). Today, this data is downloaded from my monitor to my smartphone app via Bluetooth LE (LE for Low Energy) and then uploaded to Fitbit’s website.

I’ve tried to find a way that I should care about the privacy of my Fitbit data. The best that I can tell, someone would know my typical sleep cycle and could try to rob my house.

What Fitbit does for fitness, 3M, iHealth, Onyx and others are doing for medical devices. We are entering an age of medical big data powered by Bluetooth connectivity and smartphone apps.

3M Littmann makes a Stethoscope that sends the information via Bluetooth to a PC or mobile device. iHealth makes a Gluco-Monitoring System which automatically updates your logbook to your smartphone app.

Soon, we will have Bluetooth enabled Pacemakers, Diabetic Pumps, and other devices that connect today via landline or GSM modules. Today, these devices connect via trusted, manufacturer provided hardware and dial-up to manufacturer databases. The future could mean the medical device — enabled with Bluetooth — connects to your smartphone and smartphone app. The data is stored on the untrusted consumer phone until it can be uploaded via the Internet to the manufacturer web service.

What was a network of trusted devices is now managed by Bring Your Own Device (BYOD).

Under this new paradigm, we must think about the security of medical data differently. While today, we control the end-to-end data transmission process, in the future we will pass the data to an untrusted device.

I recommend thinking about the following when building devices which many connect via Bluetooth to mobile devices:

**Build Security In From The Start**

Simply adding Bluetooth connectivity to an existing product will make it difficult to securing the platform. Building security in from the design phase (or in some cases, re-doing the design phase now that new network connectivity is being added) will result in an easier to secure device.

**Perform an Architecture Risk Analysis**

Since data will be passed back and forth between trusted and untrusted devices, an analysis of the security architecture, data flows, and attack surface is necessary to properly secure the device.

**Assume the Mobile Phone Has Been Compromised**

There are great products in the market for detecting compromised phones. In the medical device space, the lifespan of the device will likely outlast the security of the mobile phone platform. Someone will be able to circumvent the controls. Assuming the device has been compromised may be a more long term approach to the security of the device.

**Understand the Risk**

In many cases, the economics of building this connectivity will drive the business case. Understand the platforms you’re integrating on to, security limitations, and potential breach impact will help inform the business of the risks that may exist. While these technologies have all existed for a while, bringing them together as a medical device is relatively new.

Medical device companies have always been focused on the safety of the devices. We must now think about the security of the data that they capture.