# "Fire and Forget" lambda by lambda call example for zeit/now

```
npm install
now dev
```

lambda1.js calls lambda2.js and doesn't wait for response.
while it works locally via `now dev`
there is `openssl` error when running deployed to `now`:

```
2019-07-09T13:00:51.906Z  629fb181-47a7-4328-bb2f-e380f2299e6e  make http request { hostname: 'now-lambda-fire-and-forget.yurigor.now.sh',
  port: 80,
  method: 'POST',
  path: '/api/lambda2.js',
  headers: { 'Content-Type': 'application/json', 'Content-Length': 39 } }
2019-07-09T13:00:51.935Z  629fb181-47a7-4328-bb2f-e380f2299e6e  NOW it's not λ1's problem anymore.
2019-07-09T13:00:51.937Z  629fb181-47a7-4328-bb2f-e380f2299e6e  problem with request: write EPROTO 140715005929344:error:140770FC:SSL routines:SSL23_GET_SERVER_HELLO:unknown protocol:../deps/openssl/openssl/ssl/s23_clnt.c:827:
 { Error: write EPROTO 140715005929344:error:140770FC:SSL routines:SSL23_GET_SERVER_HELLO:unknown protocol:../deps/openssl/openssl/ssl/s23_clnt.c:827:

    at _errnoException (util.js:1022:11)
    at WriteWrap.afterWrite (net.js:880:14) code: 'EPROTO', errno: 'EPROTO', syscall: 'write' }
```

looks like error appeared after recent `now` update.