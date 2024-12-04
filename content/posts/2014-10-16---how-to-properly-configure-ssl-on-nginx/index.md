---
title: How to Properly Configure SSL on nginx
date: '2014-10-16T00:00:00.000Z'
template: post
draft: false
slug: /posts/how-to-properly-configure-ssl-on-nginx
category: Technology
tags:
- Technology
- jay-schulman
description: Learn how to securely configure SSL on nginx by removing SSLv3, optimizing
  performance, and enhancing security with TLS protocols and efficient cipher orders.
---
With news of the [latest security bug](http://googleonlinesecurity.blogspot.com/2014/10/this-poodle-bites-exploiting-ssl-30.html) — this week in SSLv3, I went into the SSL configuration for jayschulman.com and found the following:

ssl_protocols include SSLv3 — no good. Removed it and restarted nginx. In the spirit of good configurations, here is the full outline of the ssl configuration for nginx:

> listen 443 ssl; // nginx needs to listen on 443 for ssl connections.

> server_name [www.jayschulman.com;](http://www.jayschulman.com;) // server name. this should match your cert.

> ssl_certificate /etc/nginx/ssl/bundle.crt; // location of your trusted cert path

> ssl_certificate_key /etc/nginx/ssl/www.key; // location of your private key

> ssl_session_cache shared = SSL = 20m; // the slowest part of SSL is the start-up so lets cache it for 20 minutes.

> ssl_session_timeout 10m; // same as previous, timeout after 10 minutes.

> ssl_prefer_server_ciphers On; // in ssl_ciphers below, we’re going to give our preferred order of ciphers

> ssl_protocols TLSv1 TLSv1.1 TLSv1.2; // notice here, we only allow TLS. SSLv3 is removed.

> ssl_ciphers ECDH+AESGCM = DH+AESGCM = ECDH+AES256 = DH+AES256 = ECDH+AES128 = DH+AES = ECDH+3DES = DH+3DES = RSA+AESGCM = RSA+AES = RSA+3DES:!aNULL:!MD5:!DSS; // this is our preferred order of SSL ciphers. this is a generous list. you may want to shorten.

> ssl_stapling on; // turn on SSL Stapling. A more efficient way to check if our cert has been revoked.

> ssl_stapling_verify on; // same as previous

> resolver 8.8.8.8 8.8.4.4 valid=300s; // we have to give SSL stapling a DNS server to lookup. I prefer google’s servers.

> resolver_timeout 10s;

> add_header Strict-Transport-Security “max-age=31536000”; // This says: once we’re HTTPS, don’t go back to HTTP (for a while).

Not only should that give you a secure SSL connection with nginx, it should also make it pretty fast.