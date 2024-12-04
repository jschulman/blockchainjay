---
title: Why We Will Never Secure The Internet of Things
date: '2015-12-16T00:00:00.000Z'
template: post
draft: false
slug: /posts/why-we-will-never-secure-the-internet-of-things
category: Uncategorized
tags:
- Security
- jay-schulman
description: Explore why securing the Internet of Things (IoT) remains elusive, as
  most devices, made by unknown manufacturers, lack security measures. Discover the
  need for universal security standards.
---
We talk about the problem securing the internet of things all the time. It’s a tough battle but individually *things* can be secured. I’ve personally help secure medical devices, cars, phones and even the occasional welder.

In each case, something drove the company to check the security of the device. With medical devices, the FDA has been driving organizations to assess the security risks of their devices. With cars and welders, it was prior breaches that got them to review their security.

But a majority of *things* are not created by the people I’ve helped.

#### Who Makes *Things*

Let’s start with how I started thinking about this — at Amazon.com. There are thousands of brand name electronics on Amazon. But then there are tons of perfectly good (and often highly rated) things made by someone you’ve never heard of. Here is a great example:

Some people assume that these are all major corporations building competing products to name brand items (in this case a FitBit).

And maybe sometimes that is true. But most of these devices are made by manufacturers in Asia who don’t even think about security.

If you want to create a product, the first stop most people take is to Alibaba. Alibaba is the biggest marketplace of manufacturers of *things*. They’ll make whatever you want, put your company logo on it, and ship it directly to Amazon.com for you to sell.

I was trying to think of something goofy I could have made at Alibaba that would potentially be insecure. An Ethernet Clock popped into my head. There are 2,023 vendors who will make me this clock:

Champion Decor will be happy to make a JaySchulman.com branded Ethernet Clock for the low price of $4 a clock (if I buy 500).

I haven’t looked at this clock and I have no idea whether or not it’s secure. But this is how so many products are made. In fact, there is a long held belief that Amazon.com buys their Amazon Basics products in just this manner.

#### Is Your Product Secure?

To stereotype, most of these manufacturers are focused on client service and satisfaction. I contacted a few vendors I thought would be interesting from a security standpoint. They were more than happy to adjust the colors, features, price point and just about anything else I could think of.

“Is your product secure?”

Of the 3 vendors I contacted (all via e-mail), 2 stopped responding after I asked that question. The 3rd told me about the security features they had. (Which is a fair answer considering English wasn’t their first language.)

Many of the products you own today are produced by a third party, labeled, and shipped to you.

#### Where the software is made?

I picked up a little Linux device purposely to test the security. It was made by a contract manufacturer and branded with a company’s logo. I have a hunch who made it by searching Alibaba and trying to find the exact device. But especially on Alibaba, everyone is copying everyone’s *things* so it’s hard to tell who makes what.

The device is designed and marketed as a home theater PC. One of those small devices with a powerful video card that can fit nicely behind a TV. The device showed up with a very old version of XBMC running under a very old version of Linux.

The product itself appears to have come to market in late 2013 and the software is from late 2012/early 2013. My guess is that they made an image that worked and then kept shipping the image today. (In case you’re wondering, the manufacture date was this summer according to a sticker on the bottom.)

#### Vertical Integration

As your ecosystem becomes more complex, it’s likely that small devices running their own software become integrated into bigger devices. I have this gardening device, it speaks WiFi, bluetooth, has a bunch of sensors and sends me data on everything you’d want to know about dirt.

In putting together a device like that, they likely bought each part along with a controller board. That is likely 8 or 9 different pieces of software interacting with each other.

In the automotive sector, cars are devices built on top of devices. If you start to tear apart your own car, you’ll see a dozen different manufacturers coming together to make your radio work. It’s a large challenge to make sure each device itself is secure and then once you put them all together, they remain secure.

#### Building a More Secure *Thing*

The solution is standards. When your average manufacturer makes a wireless card, it works. It works because they’re following the 802.11x standard. (And if it doesn’t work, you have a standard which to hold them to fix it.)

We need a set of standards for the security of the internet of things to allow manufacturers who don’t understand security to still build secure devices.

That’s a tall order. It’s easy to tell someone who understands security how to make something secure. It’s a bit harder to make a template that a contract manufacturer can build to.