# nah-red.net

This is a final project for CS410 Introduction to Web Development at Portland
State University.

<br />

# How to Run

Requires nothing on your part! Simply visit [nah-red.net on Github Pages](https://nalexh2.github.io/nahrednetv1/)
and explore to your hearts desire.

<br />

# How is this being deployed? What are you using to make this website?

This website is being deployed with [AWS Amplify](https://aws.amazon.com/amplify/faqs/) through GitHub every time a new push has been detected. I wanted to explore managing a website through a more enterprise perspective and felt this was a great choice. With AWS I was also able to establish a personal email through my website that people are able to contact me with. The form on the site also sends me an email to this address when filled out and submitted correctly.

Additionally, the website is built using a combination of HTML (with [Bootstrap](https://getbootstrap.com/)), CSS and JavaScript.

Utilizing the `Date` library with JavaScript, a greeting is displayed based on the users location and current time of day. It pulls the users local time and determines (based on 24hr format) if it's before noon, after-noon or the evening (past 4pm).

The contact form is handled by [Formspree](https://formspree.io).
