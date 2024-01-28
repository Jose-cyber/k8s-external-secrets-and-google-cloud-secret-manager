## NodeJs basic auth example

It's an example of Node.js application with basic auth middleware configuration.

## Run local

Install dependencies:
<pre>
npm install
</pre>

Run:
<pre>
npm run dev
</pre>
or
<pre>
node src/index.js
</pre>

## Tests
run:
<pre>
npm run test
</pre>

## Build docker image

Build:
<pre>
docker build -t nodejs-basic-auth -f Dockerfile .
</pre>

## Run docker image

<pre>
docker run -d --env-file=.env -p8080:8080 nodejs-basic-auth
</pre>

