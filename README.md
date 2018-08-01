# Simple Express Server Playground

For hosting/testing random stuff in Node/Express.

Use `npm i && npm start` to run the server.

## Domain Cookie Test

Prereq: Add `127.0.0.1 domainCookieTest.example.test` to your hosts file or otherwise set up DNS record to point to this server.

Route: /domain-cookie (e.g, http://domainCookieTest.example.test:3000)
VERBS:

- GET - echos the cookie if it exists
- POST - sets the cookie
- DELETE - expires the cookie

Testing non-GET in Browser:

1.  Open dev console.
2.  Use: `Promise.resolve(fetch("http://domaincookietest.example.test:3000/domain-cookie", { method: "POST" }))`
3.  Change the method to test the different verbs.
