# nah-red.net

This is a final project for CS410 Introduction to Web Development at Portland
State University.

<br />

# How to Run

Requires nothing on your part! Simply visit [nah-red.net](https://www.nah-red.net/)
and explore to your hearts desire.

<br />

# How is this being deployed? What are you using to make this website.

This website is being deployed with [AWS Amplify](https://aws.amazon.com/amplify/faqs/) through GitHub every time a new push has been detected. Probably not great for larger scale projects, but perfectly fine for this!

Additionally, the website is built using a combination of HTML (with [Bootstrap](https://getbootstrap.com/)), CSS and JavaScript. The weather is pulled from [OpenWeather](https://openweathermap.org/) and uses an API to identify the current temperature in Portland, Oregon based on a latitude and long.

The greeting was also written in JavaScript. It pulls the users local time and determines (based on 24hr format) if it's before noon, after-noon or the evening (past 4pm).

The contact form is handled by [Formspree](https://formspree.io).
