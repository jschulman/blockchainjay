---
title: "Contact me"
template: "page"
socialImage: "./image.jpg"
---

<h1 style="margin-bottom: 1.5rem; font-size: 2rem; font-weight: bold;">Let's Get In Touch</h1>

<p style="margin-bottom: 2rem; font-size: 1.1rem;">Got questions or comments? I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.</p>

<form name="contact" action="/contact-success" method="POST" netlify-honeypot="pooh" netlify style="max-width: 600px; margin: 0 auto; padding: 2rem; background-color: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div class="field hidden" style="display: none;">
        <label class="label" for="pooh">Don't fill this out if you're human</label>
        <div class="control">
            <input class="input" id="pooh" name="pooh"/>
        </div>
    </div>
    <div class="field" style="margin-bottom: 1.5rem;">
        <label class="label" for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Name</label>
        <div class="control">
            <input class="input" id="name" name="name" autocomplete="name" type="text" required 
                style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"/>
        </div>
    </div>
    <div class="field" style="margin-bottom: 1.5rem;">
        <label class="label" for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email</label>
        <div class="control">
            <input class="input" id="email" name="email" autocomplete="email" type="email" required
                style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"/>
        </div>
    </div>
    <div class="field" style="margin-bottom: 1.5rem;">
        <label class="label" for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Message</label>
        <div class="control">
            <textarea class="textarea" id="message" name="message" required
                style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; min-height: 150px; font-size: 1rem;"></textarea>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-link is-pulled-right" type="submit" 
                style="background-color: #3273dc; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer; transition: background-color 0.2s;">Send</button>
        </div>
    </div>
</form>