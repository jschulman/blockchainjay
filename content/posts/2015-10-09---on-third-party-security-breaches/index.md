---
title: On Third Party Security Breaches
date: '2015-10-09T00:00:00.000Z'
template: post
draft: false
slug: /posts/on-third-party-security-breaches
category: ''
tags:
- Security
- '#jay-schulman'
description: Explore the aftermath of the T-Mobile/Experian breach, examining blame
  dynamics, brand impact, and strategies for mitigating third-party risk. Learn how
  to protect your company from similar incidents.
---
While I definitely take requests for posts, I wasn’t going to write a post on the T-Mobile/Experian Breach until 4 or 5 people asked me when it was coming.

Having worked with many organizations when they were breaches, it’s not fun and all too easy to find faults after the fact. Brian Krebs tried to find a connection between some recent attrition and the breach [here](http://krebsonsecurity.com/2015/10/at-experian-security-attrition-amid-acquisitions/).

I though find something specific interesting with the T-Mobile/Experian Breach.

#### Who is to blame?

My typical guidance around third-party breaches is that the biggest company takes the most heat. Remembering back to a Leo Burnett breach of McDonald’s data, the Golden Arches were plastered all over the news. (In fact it was a third-party to Leo Burnett which got breached.) The CISO of McDonald’s showed me his e-mail filled with security sales people willing to provide tools to secure his enterprise. An enterprise that technically wasn’t breached. (I’m sure the CISO at T-Mobile can show the same today.)

Someone e-mailed me the day the news broke and asked if I saw the news. We discussed the theory that the one with greater brand recognition would headline articles more because the bigger brand would influence more online clicks. Thereby giving the bigger brand greater brand reputation damage. I voted for Experian. He disagreed and thought T-Mobile would headline the most.

Using Google News as an authoritative source, news mentions trended towards T-Mobile by about 5%. Oddly, if you search for T-Mobile breach in Google, I was served an ad from Experian:

#### Where do we go from here?

As we build our budgets for 2016, what can we do to reduce the likelihood of a breach at our third parties? I think there are three components to assessing third party risk:

- **Data at Rest: **What data are your third-parties storing?
- **Data in Motion: **How are you transfering data between yourself and the third-party?
- **Data as a Service: **How are your third-parties using that data? Are they collecting it via a web application? Are you sending them data to be processed or manipulated?

When we look at our third-party risk we’re often looking at money we spend with the third party, the strategic nature of the relationship, and not the actual services being performed by the vendor. As a vendor myself, I am often asked 1) are you handling our data? 2) are you storing our data on your premise? and therefore 3) what controls do you have in place?

Instead, we should be focused on how the data is being used. I would want to spend more time with a vendor who is running an application that is collecting my customers’ data than one where I’m shipping it for backend processing.

Finally, my mantra is *the most important part of a breach is how you handled it*. I’m sure the other two credit reporting agencies are thinking about that right now.