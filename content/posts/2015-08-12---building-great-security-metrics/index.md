---
title: Building Great Security Metrics
date: '2015-08-12T00:00:00.000Z'
template: post
draft: false
slug: /posts/building-great-security-metrics
category: ''
tags:
- Security
- '#jay-schulman'
description: Discover the power of effective security metrics to gauge progress and
  drive improvements. Learn how to measure key processes, avoid common pitfalls, and
  leverage metrics for career growth and risk reduction.
---
I love metrics. So much of what we do in security feels like we’re running on a hamster wheel. Metrics give you some indication of whether you’re moving forward, back, or just running in circles.

Before I give any advice on metrics, you should start with my favorite book on the subject: [Security Metrics, A Beginners Guide](https://www.jayschulman.com/go/security-metrics-book/). It’s written by my colleague at Cigital, Caroline Wong.

So let’s start with what most people do: Look at the number of vulnerabilities in the environment. What does that mean? Does it mean you’re doing better at finding things? Are you just adding more devices?

The number of days to fix vulnerabilities is a common second metric. Good. We can see whether things are getting fixed. How many of those vulnerabilities are patches that are not installed? How many of those things getting fixed are just part of the standard patch process? When we report on how quickly you fix things, do we really understand what it means? (well, we assume fixing things faster is better, right?

#### The Metric Problem

Let’s go back to the basic processes in your environment: SDLC, Patching, Identity, etc. What are indicators that the process is or isn’t working? So back to that vulnerability metric from above, you want to track vulnerabilities that fail your process. Let’s say your patching process occurs on the 3rd of the month. Reporting on a vulnerability before your patching process is like saying, “Hey, you’re missing a patch that is scheduled to be applied next week.” If you’re measuring how many days it took to fix that, are you really just measuring your normal patch process?

These are patch centric examples, but they make it easy to understand the problem of metrics. We aren’t measuring processes, we’re measuring vulnerablities.

If your metrics are based upon the processes in your environment, they can also be used to drive process improvement. If too many vulnerabilities aren’t getting fixed correctly, now you know where to spend your time. (Job aids for remediation would be my first recommendation.)

#### Foundations for Good Metrics

If you have a set of metrics you’re looking at today, run each of them through these bullets to see if they make sense. If you’re building a list of metrics (or thinking about how to measure your own performance), think through these bullets:

- Is it a key indicator of risk in your environment?
- Does it indicate a problem which you know how to fix?
- Are you measuring something non-security people understand?
- Do you understand what makes the numbers go higher/lower or better/worse?

#### A Comedy of Errors

I’ll start off with a metrics story (because we all have a metrics story in our back pocket). I was working for a Fortune 10 company and they had one of those bad IT days where everyone in the company knew it was a bad day. The next week, I was walking through the metric dashboard that goes to the CIO and it was reading all green. “How is it that everything was down last week and yet, we’re still all green?”

“Oh, well, each director sets the underlying numbers so that they should never go yellow unless it gets really bad. And that wasn’t really bad.”

That’s a comedy of errors. When anyone on my team comes to me with a story like this, I always say, “Write it down for your book.” Have you written one of these comedy of errors stories down? I’d love to hear it (changing the names to protect the innocent). Shoot me an e-mail at metrics@jayschulman.com with the story for a future post.

#### Back To Growing Your Career

There is one final point that I only briefly mentioned above. When you’re looking for a promotion, advancement, or simply to explain to someone outside the organization the impact that you’re having, metric are a powerful tool.

Even if your organization isn’t formally tracking metrics (or good metrics), if you have the capability to track them yourself, track metrics that you think will show you improved your processes.

Outlining how your changes improved remediation times by 27% isn’t made up when you have the data to prove it. It’s a much more powerful resume, interview and discussion when you can talk about the metrics we impacted personally.