---
title: How We End Up With Too Many Security Policies
date: '2015-03-02T00:00:00.000Z'
template: post
draft: false
slug: /posts/how-we-end-up-with-too-many-security-policies
category: Security
tags:
- Security
- '#jay-schulman'
description: Explore the pitfalls of policy bloat in security management, as the article
  delves into redundant policies, misplaced guidelines, and tech-enforced rules, advocating
  for streamlined security measures.
---
Earlier this week, I wrote about how [we have too many security policies](https://www.jayschulman.com/you-have-too-many-security-policies/). I wanted to take a quick look at some default security policies to see what we can strip out. I went to the [SANS Information Security Policy Templates site](https://www.sans.org/security-resources/policies/) to look for some good templates to edit. For this exercise, I decided to edit a section of the password protection policy. First, my compliments to the original writer. My edits are not an indication of bad policy writing but of years of policy bloat. We just have too many policies to manage.

Here is my take:
[

Are These Security Policies Necessary?

As part of Jay's post about having too many security policies (see: https://www.jayschulman.com/you-have-too-many…

www.scribd.com

![](__GHOST_URL__/content/images/fit/c/160/160/0-B6MYw34w5_swDMoB.jpg)
](https://www.scribd.com/doc/257062792/Are-These-Security-Policies-Necessary)
#### Lessons Learned

- **We have too many redundant policies. **As I read them, I’m sure most are for clarification. You shouldn’t give out your password. Here are 9 specific ways we want to make sure you don’t give out your password.
- **We have policies in the wrong places. **If we want developers to incorporate policies into their applications, including the statements in the password policy document isn’t the right spot. Add them to (what I hope is) a standard functional and non-functional requirements document that every project starts with to build out a new application.
- **We tell our users rules that are enforced by technology. **If we want a user to pick an 8 character password, set the system to require an 8 character password. (If your system doesn’t enforce a minimum number of characters, you can’t expect your user to comply.)

We need to start thinking less policies, not more.