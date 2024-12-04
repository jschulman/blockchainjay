---
title: 'ISO 27017: A New Standard to Learn'
date: '2015-12-02T00:00:00.000Z'
template: post
draft: false
slug: /posts/iso-27017-a-new-standard-to-learn
category: ''
tags:
- Security
- '#jay-schulman'
description: Explore ISO 27017, a cloud-specific security standard that Amazon Web
  Services recently adopted. Learn how it complements existing ISO standards and its
  implications for cloud security practices.
---
At some point, you can’t keep track of all of the standards, guidelines and regulations we all need to comply with on a daily basis. Truth be told, ISO 27017 crept up on me.

Yesterday, Amazon Web Services [announced](https://aws.amazon.com/blogs/aws/aws-certification-update-iso-27017/) it’s compliance with ISO 27017 and with it created a market for understanding the regulation and it’s impact on information security.

ISO 27017 is itself a fairly easy standard to understand. It outlines the controls a public cloud provider should take to properly secure their systems. The expectation would be that all cloud providers beyond Amazon Web Services (such as Microsoft Azure, Google Cloud, Rackspace, etc) would certify to the same standards.

#### The Web of Standards

What is complicated about ISO 27017 is how the standard fits in with the rest of the ISO standards. Before we can untangle the web, here is a quick primer on the basic ISO standards that related to Information Security:

- ISO 27001 is the Information Security Management System (ISMS) requirements standard.
- ISO 27002 is the code of practice for information security controls describing good practice information security control objectives and controls.
- ISO 27003 provides guidance on implementing ISO 27001.
- ISO 27004 covers information security management measurement.
- ISO 27005 covers information security risk management.
- ISO 27006 is a guide to the certification or registration process for accredited ISMS certification or registration bodies. New 2015 version released in Oct
- ISO 27007 is a guide to auditing Information Security Management Systems.
- ISO 27008 concerns the auditing of ‘technical’ security controls.
- ISO 27009 will advise those producing standards for sector-specific applications of ISO 27000s.
- ISO 27010 provides guidance on information security management for inter-sector and inter-organisational communications.
- ISO 27011 is the information security management guideline for telecommunications organizations.
- ISO 27013 provides guidance on the integrated/joint implementation of both ISO 27001 (ISMS) and ISO 20000–1 (service management/ITIL).
- ISO 27014 offers guidance on the governance of information security.
- ISO 27015 provides information security management guidelines for financial services.
- ISO 27016 covers the economics of information security management.
- ISO 27017 covers information security controls for cloud computing.
- ISO 27018 covers PII (Personally Identifiable Information) in public clouds.

(They actually keep going up to 27050 but I stopped here for this exercise.) Most people are familiar with ISO 27001 and 27002 but in the last few years, there are been a lot of additions to the ISO standards.

While Amazon is touting compliance with ISO 27017, it’s important to understand how it fits in with the standards above.

ISO 27001 outlines the framework of an ISMS — I’ll just call it *an information security program*. ISO 27002 provides the controls needed for a well functioning ISMS — or they are the implementation guidelines for building out the program.

When someone says they are (or are getting) ISO 27001 certified, most of the guidance and requirements to get certified are contained in ISO 27002.

ISO 27017 and 27018 build on ISO 27002 in providing specific guidance on implementing 27002 under specific conditions. 27017 outlines specific guidance on implementing 27002 in the context of a cloud provider. While 27002 was updated recently, it still doesn’t take into consideration cloud computing, only vendor management.

27018 is similar to 27017 in that they both discuss cloud computing but in 27018 it specifically outlines requirements for the privacy of end-user data.

#### What You Need To Know

Without a doubt, a baseline understanding of ISO 27001 and 27002 is critically important to understanding the international standards for information security. If you aren’t familiar with the standards, I encourage you to understand them and think about how you’d implement them in your environment. (Most organizations won’t go through he trouble of certifying to them but it’s good to think through how they would be implemented.)

As you select a cloud provider for your organization, it’s also good to understand ISO 27017. The standard is specifically for the Amazons and Googles but you should understand the controls they are expected to implement. While Amazon was first out of the gate with the ISO 27017 certification, I would expect the other major players to certify at least some parts of their environment in the near future.

Finally, I would look at all of the standards. There is a wealth of information in each standard that may help you both in your career and at your current job. The standards are specifically generic — they have to work universally for almost anyone — so your millage may vary.