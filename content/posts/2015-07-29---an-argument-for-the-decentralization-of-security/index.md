---
title: An Argument for the Decentralization of Security
date: '2015-07-29T00:00:00.000Z'
template: post
draft: false
slug: /posts/an-argument-for-the-decentralization-of-security
category: ''
tags:
- medium
- jay-schulman
description: Explore why decentralizing security in corporate mergers can reduce risks.
  This blog delves into maintaining separate networks, security teams, and PCI environments
  to minimize vulnerabilities.
---
The trend in corporate america is for companies to buy other companies. Kraft and Heinz merged along with Anthem and Cigna, just to show two recent examples. The objective of these mergers is usually efficiency. You no longer need 2 of everything.

When it comes to information security though, more is better.

#### Diversify Your Risks

As companies grow larger, they need to ensure they aren’t too reliant on one of anything — service provider, data center, location. If disaster strikes, you need a backup location. If your only service provider goes bankrupt, you’ll need another provider.

The same argument goes for protecting your key information.

#### Don’t Interconnect Your Networks

Having worked on a number of merger integrations, the first order of business is to connect to the two companies’ networks. By connecting the two companies’ networks, you’ve expanded the impact of a security breach. You’ve also increased the number of people who you can target for a phishing attack.

By keeping networks separated, you’re reducing the threat landscape to the original companies rather than the combined entity.

#### Don’t Combine Your Security Teams

The farther away you are from the action, the harder it will be to secure. Mind you, Anthem and Cigna are huge organizations already. Their security teams are likely pretty far from the action already. It’s an even harder job as the two organizations combine. By leaving the security organizations separate, they are much more focused on their business unit and have a better chance of identifying key issues which need to be resolved.

#### Don’t Increase Your PCI Footprint

This is just a further example of combining networks (and applications). There are definitely efficiencies in having a single PCI environment versus many small ones. Centralizing your transactions all in one platform again increases your risk and increases the scrutiny of the environment (if you’re moving from one tier of PCI compliance to another).

#### Is This Realistic?

No. I can’t imagine walking into the CFO’s office of a big merger suggesting that some of the integration be skipped. Many of these mergers are built around cost savings and most of the suggestions above would have no positive impact to the bottom line.

I know two organizations that operate just like this. Many business units spread throughout the world each with their own teams, policies, networks, and applications. While a security breach would be bad for one business unit, they would have no material impact to the company as a whole.

My guess is that not many companies will go the route of 100s of independent business units. Instead, I think we should revisit the assumption that everything should be combined by default. Are there opportunities to keep things separated to reduce the risk?

Can we architect a network where each business unit has access to corporate applications but not to other business units? Where the engineering team at a manufacturer can access their design applications but can’t access the sales applications? Historically it’s too hard and/or too dynamic.

We’re not going to solve security breaches by doing security better — they will always find the needle in the haystack. We will reduce our risks when we reduce our landscape.