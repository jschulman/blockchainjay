---
title: What InfoSec Pros Can Learn From Agile
date: '2015-10-05T00:00:00.000Z'
template: post
draft: false
slug: /posts/what-infosec-pros-can-learn-from-agile
category: Security
tags:
- Security
- '#jay-schulman'
description: Explore how InfoSec professionals can learn from Agile methodologies
  to improve security integration in software development, transforming security practices
  into a more proactive and disciplined approach.
---
I attended a developer conference recently to better understand the intersection between security and development. Agile, DevOps, Scrum… they are all the rage and most security people cringe at trying to integrate or “build security in” to those methodologies. I was listening to a speech by [“Uncle Bob” Robert Martin](https://en.wikipedia.org/wiki/Robert_Cecil_Martin), one of the writers of the [Agile Manifesto](http://www.agilemanifesto.org/), and I realized this is a lesson in history.

#### How The History of Programming Matters to Security

The first “programmer” was probably Alan Turing. This was in the 1940s. The first set of programmers were mathematicians. For the first decade or more, the people writing software were disciplined. They didn’t have degrees in computer science. They were likely working for universities and research labs.

With the first Computer Science degree program getting started in 1962 at Purdue University, a Renaissance programmer like Turing was replaced with the career programmer.

Up until this point, the Renaissance programmer learned programming on the job, was a 50/50 mix of male and female and likely aged 40 to 50.

The degree programmers were fresh out of college, predominately male, and only knew what they learned in school. The new generation (mind you we’re still in the 1960s and 70s) of developers were difficult for the business to understand. Instead of trying to understand development, they applied a manufacturing methodology (something they understood) on top of developers (something they didn’t).

Thus the Waterfall Methodology was created. Not because it was a better way to develop software, but a bunch of *young punks *needed some guidance and rigor in developing their code.

Agile is supposed to be about applying the same disciplines that should have been applied earlier if the business people tried to understand development.

This is where security starts to repeat history.

#### We Are Doomed To Repeat Ourselves

As I’m listening to Uncle Bob tell the story of the history of development and Agile, I’m hearing mirror images of the information security community.

- The business people don’t understand it, so they apply a known methodology against it
- It used to be managed by renaissance artisans and is now run by young school taught professionals
- We really don’t understand developers either

Security used to be simple. Firewalls, routers, switches. Keep bad ports closed. Change your passwords. Run anti-virus. Today, people in the western world use software once per minute. (Think about the software in light switches, cars, etc.) Trying to secure all that software is a daunting task. It is so daunting that the CXOs who get involved in it don’t understand why it is so complex but fund it to make sure nothing bad happens. Let’s call it *insurance.*

The security people who grew up in varying parts of the IT organization have been replaced with professionals who have only worked in security. (I’d like to think I’m not old enough to call them young punks.)

Very few security people develop code. It’s hard for us to tell developers how to code securely.

#### Discipline

We are missing our discipline. We run around trying to find everything that is broken or vulnerable without a proper methodology. We don’t have the discipline to manage security when it’s going at Agile or Continuous Delivery speed.

[Tweet “Security people run around trying to find everything that is broken or vulnerable without a proper methodology.”]

The methodologies that exist in our field — ISO 27001, NIST frameworks, etc. — are about assessing our environments (finding what’s wrong) and not how to run a disciplined capability.

It’s no wonder it’s an unmanageable task.

#### A Way Forward?

There is no silver bullet. I can’t say “security people should just adopt the agile methodology.”

I do think the concept of *Build Security In* is the start of our way forward. At my company, [Cigital](http://www.cigital.com), Building Security into the Software Development Lifecycle has been second hand for many years. Many of our clients tell us it sounds like something everyone should do. No one argues with the methodology (although they certainly have opinions on how to do it).

What we need to do is take a step back and start thinking about information security as building security into all facets of the business rather than processes to find and fix vulnerabilities. It’s a mindset, not a departure from the activities we’re already doing every day.

I wrote last year about [how we have too many policies](https://www.jayschulman.com/you-have-too-many-security-policies/) and reflecting on that post today helps me frame the problem. We’re putting walls up to protect our organizations rather than making sure the business builds those walls.

It’s easy to say *they won’t* or *they don’t know how* but I think we need to try harder. When I first started talking to developers about application security (circa 2003), they really didn’t know why you should filter your input and output. Today, while some developers still don’t know how to do it correctly, a majority understand the importance.

As security leaders, we need to challenge our assumptions. Most of my recommendations are easy for me to say but difficult to implement. But the conversation doesn’t stop here. I would encourage you to challenge what I’ve written, comment, reply, and continue to present ideas to help more our industry forward.