---
title: Are Airline Kiosks The Next Fraud Vector?
date: '2013-12-26T00:00:00.000Z'
template: post
draft: false
slug: /posts/are-airline-kiosks-the-next-fraud-vector
category: Security
tags:
- Security
- '#jay-schulman'
description: Explore how airline kiosks might become the next target for credit card
  fraud, drawing parallels to the infamous Target breach. Learn about potential vulnerabilities
  and the implications for travelers.
---
There are a lot of people speculating on the cause of the Target [credit card breach](https://www.jayschulman.com/wp-content/uploads/2013/12/cards-stolen-in-target-breach-flood-underground-markets). There are a couple of interesting bits about this breach compared to the most common credit card breaches we see:

**Target Breach: **The hacker stole the magnetic stripe data. To understand what they actually took, look [here](https://www.jayschulman.com/wp-content/uploads/2013/12/magexam1.html). The magnetic stripe is the data stored on the back of your card and is read by the card reader when you or the cashier swipes your card. It contains your credit card number, your name, and a CVV number. This number is different than the three digit number on the back of your card which is often referred to as the CVV2 number. (2 as in a 2nd verification value.) By stealing the stripe data, it enables a hacker to replicated your physical card.

**Other Breaches (Zappos, TJX, etc):** What has been typical of credit card breaches in the past few years is a breach of a database which stores credit card numbers (and probably also usernames and passwords for online breaches). In this case, they generally get the credit card number, expiration date, and rarely (it’s against PCI standards) the CVV2 number. Using this information, a hacker can only use it for *Card Not Present* transactions (online or over the phone).

The reason that most of the breaches don’t contain the magnetic stripe data is that (in a proper working system) the stripe data is encrypted in memory and sent to the bank for authorization. Either tokens or (hopefully) an encrypted credit card number are stored in a database.

**At this point, I don’t know how the Target breach occurred. **But in doing my research, I came across a malware called Dexter. (Full background on the malware is [here](https://www.jayschulman.com/wp-content/uploads/2013/12/Dexter-and-Project-Hook-Break-the-Bank.pdf).)

Dexter runs on Windows machines and searches for the magnetic stripe data in memory. Even in a secure point of sale system, the magnetic strip data could come from the reader unencrypted in memory before being sent encrypted to the credit card processor. (In a [threat model](https://www.jayschulman.com/wp-content/uploads/2013/12/threat-modeling-vocabulary) of the environment, I could believe that this was labeled a low risk.)

The Dexter Malware doesn’t appear to be self-propagating. Attackers would have to install it on many, many point of sale terminals at Target to get the breadth of card information which they obtained.

#### Are Airline Kiosks Next?

Everything that point of sale systems are, airline kiosks are not. The systems I’m referring to are the stand alone, unattended check-in stations that each airline maintains at most airports. (A picture of Southwest Airlines kiosks are above.)

The kiosks are often in locations where an attacker could install malware on it. In many cases, the boxes which contain the kiosk lift up for easy access to the actual computer itself since workers have to replace the paper regularly. The only downside to physically attacking the kiosk is you’ll definitely be recorded on video.

The kiosks read your magnetic stripe data to pull your first and last name to lookup your record locator. They don’t actually process a transaction. Based upon my anecdotal experience, many of these kiosks run a version of Windows which would mean many could be vulnerable to the Dexter malware.

#### Why Does It Matter?

My credit card was skimmed and used at a Target in New York the day before Thanksgiving. Interestingly, the card that was skimmed was my travel card. I’ve never used it at a Target.

Part of what Visa, Mastercard and the banks do is utilize the transactional data on fraudulent transactions to determine *patient zero* — the source of the credit card breach. In the Target case, the data led them directly to Target. (In Brian Krebs’ analysis [here](https://www.jayschulman.com/wp-content/uploads/2013/12/cards-stolen-in-target-breach-flood-underground-markets), there was a 100% match to stolen credit cards and Target transactions in the affected time period.)

Finding patient zero is generally easy with the amount of transactional data these institutions have. Except what if there isn’t a transaction?

In my airline kiosk hypothetical, the kiosk reads the card for the name and never even connects back to a credit card processor to validate whether that is a legitimate card. (This isn’t a vulnerability. It’s only used to speed up the check-in process, not as a means of authenticating the user. The TSA does the authentication.)

If the Dexter malware were running on airline kiosks, it would be difficult for the financial institutions to quickly find patient zero. In theory, not everyone uses the same card they bought the airline ticket to authenticate them at the airline kiosk. Therefore, the percentage of stolen cards originating from a single point may not be 100%. Additionally, many leisure travel customers buy their tickets outside a window banks would look for transactional data.

#### A Couple of Assumptions in My Theory

Before you stop using your credit card at airline kiosks, I’ve made a couple of assumptions here:

1. The Dexter Malware can run on an airline kiosk and make a connection to the outside world to drop the data.
2. The airline kiosks aren’t signing or validating their boot image. Much like some cell phones do, this prevents the modification of the system. The system wouldn’t boot with the Dexter Malware installed.
3. Even though the kiosks don’t process the transaction, there is enough analytics within the financial institutions to pinpoint the breach.