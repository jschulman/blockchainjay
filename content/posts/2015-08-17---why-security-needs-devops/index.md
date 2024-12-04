---
title: Why Security Needs DevOps
date: '2015-08-17T00:00:00.000Z'
template: post
draft: false
slug: /posts/why-security-needs-devops
category: ''
tags:
- Security
- '#jay-schulman'
description: Explore why embracing DevOps is key for enhancing security, reducing
  human errors, and minimizing vulnerabilities in application deployment cycles by
  integrating development, infrastructure, and security.
---
I might be the only security guy who thinks DevOps is a good idea. I hear all too often about how insecure it is to push code changes directly into production. ([Check out ](http://www.infoq.com/news/2013/06/netflix)how Netflix pushes code 100 times a day.)

First, just in case it’s a newer concept for you, What Is DevOps? If you think about a Software Development Lifecycle (any SDLC), it’s a set of processes to go from an idea to going live in production using automation. DevOps is about creating a conveyor belt to systematically pull together all of the pieces needs to go into production using automation to create a safe and reliable application deployment. Specifically, it is designed to better coordinate the development of the application with the infrastructure that supports it. It’s a wildly complicated field and start [here](https://newrelic.com/devops/what-is-devops) for a good place to read up more.

Let’s take a step back and understand two very important aspects: 1) how vulnerabilities get introduced and 2) the foundational objectives of DevOps.

#### How Vulnerabilities Get Introduced

Run any vulnerability scanner and you will no doubt get 1000s of vulnerabilities across your network. You’ll find them categorized into three big buckets:

- **Configuration Errors** — this is typically a human mistake that opens up a system, application or device to a security issue.
- **Missing Patch** — this is a known issue that a vendor has released a patch for. Either the patch was missed or hasn’t yet been applied.
- **Coding Mistake** — within the application, a developer has written code that opens up a vulnerability (such as SQL Injection or Cross Site Scripting).

Imagine if we could systematically correct the first two bullets. Imagine no longer…

#### The Foundational Objectives of DevOps

I recently heard [Matt Stratton](http://twitter.com/mattstratton) of [Arrested DevOps](http://www.arresteddevops.com/) and [Chef](https://www.chef.io/) talk about DevOps. He starts the discussion with:

> People Make Mistakes. This Does Not Scale.

The objective, as I interpreted it, is to reduce the number of human errors and allow those specialized subject matter experts to focus on specialized tasks. The idea being that an SME working on a mundane task is more likely to make a mistake than when they work on the really hard stuff.

So DevOps isn’t about pushing code from the desktop into production, but about ensuring that as code is written and infrastructure is changed, there is a set of checks and balances to make sure mistakes don’t happen.

#### Why DevOps is Good For Security

If we think about reducing the human mistakes and tie that back into what causes our vulnerabilities, we have a direct relationship. Reducing human mistakes will reduce our vulnerabilities. Let’s address each one specifically.

**Configuration Errors**

I know exactly how this happens. You’re doing an upgrade of the web server. Maybe you’re reconfiguring a service on the server. Without you realizing it, a new service appears on the machine. Let’s say it’s FTP. All of the sudden, a production machine is accidentally running FTP. That’s no good. But our network scanner will pick that up.

In DevOps, it works differently. I’ll use Chef specifically here, but any automation tool can do these things. First, Chef has a cookbook — a template for how a service, application, database, anything should be configured. A Chef cookbook can turn off FTP since it shouldn’t be on there. I’ll call this the infrastructure input. The cookbook says all the things that should be turned off and on and how they should be universally configured (versus the specifics of this particular server). So the Chef cookbook code would turn FTP off.

Then there is Chef Audit Mode. Chef Audit Mode looks at the output. What got built. Even though the cookbook said “turn FTP off” that doesn’t mean that there isn’t something listening on port 21. Chef Audit Mode will check to see if the system that was built matches your expected configuration.

The concept of a known mis-configuration going into production under these scenarios is very low.

**Missing Patches**

Let’s quickly go back to our Cookbook from the prior example. In the cookbook, we can apply patches, upgrade specific software that may be outdated, and perform any other patch management activities directly as part of our Chef workflow. (For an example of how you would do that for Shellshock and Chef, read [here](https://www.chef.io/blog/2014/09/30/detecting-repairing-shellshock-with-chef/).)

Once you’ve identified that you need to patch *something, *you write that into a Cookbook and Audit script. So the cookbook will apply the patches as necessary and the Audit scripts will validate that the patch was effective. (Because we all know the patches we applied but we’re still vulnerable.)

Once a new patch is released, you work it into the Cookbook and Audit Mode and work through a deployment scenario. While you will want to test patches, since Chef performs a set of integration tests to make sure everything works, you continue to reduce the impact of a disruptive patch.

**Coding Mistake**

First, Chef is primarily an infrastructure tool. We can check for coding mistakes within Chef. (They use a tool called Foodcritic to do that.) While I have some ideas on how to impact the code, I’ve already solve a huge part of my security problem already.

I’m not giving up, but I’ve reduced my vulnerabilities by two-thirds (2 of 3 categories, not necessarily vulnerability count).

#### Go Forward

As security people, I hear many pushing back on the DevOps movement. I suggest the opposite. DevOps is about bringing development and infrastructure together to make the process work better. By bringing development, infrastructure and security together, DevOps can make a huge security impact on the environment. Participate in or create cookbooks for security. Create Audit scripts to check for known security items you don’t want going into production.

Instead of trying to slow the process down, contribute and grow to make for a more secure environment.