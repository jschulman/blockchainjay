---
title: The Perception of Privacy
date: '2015-09-28T00:00:00.000Z'
template: post
draft: false
slug: /posts/the-perception-of-privacy
category: Uncategorized
tags:
- Security
- '#jay-schulman'
description: Explore the illusion of online privacy as Jay Schulman uncovers how behavioral
  patterns, not just technology, can unmask individuals online. Discover what it truly
  takes to stay anonymous.
---
When I started writing posts (you can read the very first post [here](https://www.jayschulman.com/4-coursera-cla…c-professional/)), I was a bit nervous on how people would take to my writing. More than a year and a book later, the feedback is definitely more positive than negative. But you always have your haters.

Over the weekend, I noticed a bunch of e-mail sign-ups with funny e-mails. yousuck@ihateyoujay.com. jay@yourfired.com. I was curious with all of the logs and tracking available to me whether I could figure out who it was.

#### Staying Private

I’m going to walk through my analysis below, but there is a perception when you fire up tools like [Tor](https://www.torproject.org/) that no one can figure out who you are. As you’ll see below, based upon all of the information available, it’s pretty easy to figure out who sent the e-mails even though they used Tor.

[Tweet “You can have all the right tools but if you don’t use them correctly, they don’t protect you.”]

Back at KPMG, we sat around one day at lunch trying to figure out the most anonymous way to connect to the internet. The conversation started with someone who e-mailed the President of the United States from a McDonald’s. They tracked both the video feed, credit card receipt, and their MAC address back to the person who sent it. We came up with:

- Buy a random used computer offline
- Boot to a live CD
- Go to a known free hotspot without video cameras (and don’t buy something on your credit card!)
- Connect to internet

And even then, I’m sure we’re not thinking of some data point. Luckily we’re not routinely needing this level of anonymity.

#### Tracking an E-Mail

When you submit an e-mail for anything on my website, it goes to an e-mail provider called [ActiveCampaign](http://www.activecampaign.com/?_r=6F5Q991V). (By the way, ActiveCampaign rocks if you’re in the market.) ActiveCampaign only tracks two data points beyond what you submit on the screen: IP Address and User Agent String. The IP address of my funny e-mailer was 176.9.25.72. I quick whois search showed the IP address owner as a datacenter in Germany.

I doubted my funny e-mailer was really in Germany. I also noticed that the User Agent String looked familiar.Mozilla/5.0 (Windows NT 6.1; rv = 38.0) Gecko/20100101 Firefox/38.0

A quick Google search shows that the User Agent String is for a the Firefox browser that ships with the latest version of the TorBrowser software.torbrowser 5.0.2
User-Agent: Mozilla/5.0 (Windows NT 6.1; rv = 38.0) Gecko/20100101 Firefox/38.0
Accept-Language: en-US,en;q=0.5
Window size: 1000x775

I did one final confirmation that it’s a Tor connection by using Tor’s exit node search at [atlas.torproject.org](https://atlas.torproject.org/#details/51377C496818552E263583A44C796DF3FB0BC71B):

I wasn’t ready to give up. So I went back to the raw web server logs to see what this person was doing before and after creating the funny email addresses. (Note, at this point, I’m removing any identifying information.)[20/Sep/2015 = 14 = 40 = 03 -0500] "GET /you-need-a-platform-to-learn/ HTTP/1.1"
[20/Sep/2015 = 14 = 41 = 17 -0500] "GET /signup-thankyou HTTP/1.1"
[20/Sep/2015 = 14 = 45 = 40 -0500] "GET /about-jay/ HTTP/1.1"
[20/Sep/2015 = 14 = 44 = 55 -0500] "GET /about-jay/my-team/ HTTP/1.1"

So they went straight to a post on Needing a Platform to Learn. Then signed up. Then looked at who I was. That struck me as odd. Immediately sent me a spam email address then looked around the site. I had a hunch they’d been here before. So I looked at some requests that came in a few minutes before this request.

This request stood out:[20/Sep/2015 = 14 = 35 = 02 -0500] "GET /you-need-a-platform-to-learn/ HTTP/1.1" 200 16215 "http://longurl.org/expand?url=http%3A%2F%2Ft.co%2F2sy4qOCzVE"

They go to the same URL (which wasn’t the top URL for the day so it wasn’t like everyone was stopping at that page anyway). And based upon the referral URL (shown at the end of the line of the log) they are using a tool to expand short URLs. (specifically, they’re converting the Twitter t.co URL to the full URL for the page.) Now just because you’re using a long URL tool doesn’t mean you’re also likely to use Tor. But it is a behavioral marker for someone who is concerned with their privacy.

While I’ve removed their IP address from this logs above, a quick search matched that unmasked IP address with the IP address of someone who sent me a none too happy note. 45 minutes later, I knew who my funny guy was.

#### Lessons Learned

I specifically don’t track anything terribly interesting on this website. If you look at the source code, you’ll notice your standard Google and Facebook analytics javascript along with Wordpress’s analytics as well. Combined with very standard web server logging leaves very little data points to track people down.

And yet, it wasn’t the technical features that lead me to my e-mailer but the behavioral actions. Having accessed the site right before using his normal browser and already having sent me messages of discontent.

The lesson for me is that we shouldn’t rely on technology alone to protect our privacy. You can technically have all of the right tools to in place but if you don’t use them correctly, they don’t do very much good.