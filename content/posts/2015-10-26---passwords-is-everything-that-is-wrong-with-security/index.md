---
title: Passwords is Everything That is Wrong with Security
date: '2015-10-26T00:00:00.000Z'
template: post
draft: false
slug: /posts/passwords-is-everything-that-is-wrong-with-security
category: ''
tags:
- Security
- '#jay-schulman'
description: Explore why the outdated concept of passwords is failing modern security
  needs and discover innovative alternatives like token-based authentication that
  promise a more secure future.
---
Passwords are broken. It’s not the technical implementation or the business requirements… it’s the whole concept. Fernando Corbató [created the concept of the password](http://www.wired.com/2012/01/computer-password/) in the 1960s. Startups talk about disruptive technology. (Think Uber disrupting Taxis.) We’re due for disruption in passwords.

#### The Server Side Problem

As security professionals, this is what we talk about most. How do we accept passwords, encrypt them in our databases, and prevent other people from stealing them? At Cigital, we have devoted everything from [blog posts](https://www.cigital.com/blog/securing-password-digests-or-how-to-protect-lonely-unemployed-radio-listeners/) to a computer based training course on how to secure passwords.

It’s hard to do and even if you do it right, it’s only half the problem.

#### The Client Side Problem

The Client Side is the polite way to say humans. You see, good passwords are hard to remember. Since they are hard to remember, they’re likely written down and/or reused on multiple systems. If one person doesn’t get the Server Side Problem right, the attacker finds the password on another system and reuses it on yours.

Back to my starting point, this method is dated. We’re asking users to do the impossible. I have hundreds of passwords in [Lastpass](https://www.jayschulman.com/4-things-you-should-tell-your-non-infosec-friends/). In 1964, when passwords were created there were about [20,000 computers in the world](http://ethw.org/File = EPC_-_fig_6.jpg). I’m sure the creators of the password didn’t think of a use-case for having to create and remember 100 passwords per person.

Passwords isn’t about good training or beating people into submission. It’s about being reasonable. And today, passwords are no longer reasonable.

#### The Assumption Problem

The problem is that we’re not thinking about fixing the password problem. When a company decides to create a new application, they don’t think about whether to use passwords or try something else. (Caveat for companies that use single sign on or OAuth to authenticate against other systems which use passwords.)

Business Analysts aren’t typically tasked with finding new and easier ways to have their users authenticate. We make an assumption that one of the currently accepted standards will be used.

While we may improve the backend security over time, we’re doing almost nothing to improve the human element. In fact in the name of security, we often make it harder for a user to create and remember passwords by adding upper, lower, numbers, special characters and continually increasing the length of the password.

#### A Way Forward

I was impressed recently when Yahoo Mail decided to get rid of passwords.

If you read carefully, all Yahoo has done is removed the password and instead is using a token — similar to the Google Authenticator or Duo Key. Note that while Google has the same technology, they still require you to enter a password in first and then enter in the token.

In the world of authentication, we break it down into three categories:

- Something you know: a password, your mother’s maiden name.
- Something you have: your phone, a token.
- Something you are: a fingerprint, iris scan.

When you pick from two in the list, we call it two-factor authentication. When we talk about passwords, we’re talking about something you know. Yahoo has swapped out something you know with something you have (the app running on your phone). While we’ve reduced the risk that someone will steal my password and login as me, we have increased the risk that someone can pick up my phone and use my authenticator app.

Password breaches affect thousands if not millions of users while stealing someone’s phone affects one user.

I’m not suggesting that this is the way every organization should go. **I am suggesting that we rethink our assumptions around passwords. **For many industries, this won’t be easy. Regulators are very comfortable with passwords (even though they probably shouldn’t be). Chief Risk Officers and Internal Auditors likely aren’t excited about this type of change.

Passwords need to evolve. Until we as an industry help the evolution, we will stuck with 100s of passwords to remember… or one because we re-use it everywhere.