# NodeJS Weather WebApp
Locally tested node version
```
node --version
v7.1.0
```

Node modules required
```
npm install express
npm install body-parser
npm install request
npm install ejs
```

Run application
```
node server.js
NodeJS Weather App listening on port 3000
```

Docker image
```
docker build -t spectrum/nodejs-weather-webapp .
docker run --detach --name nodejs-weather-webapp -p 3000:3000 -d spectrum/nodejs-weather-webapp
```

Test application: [http://localhost:3000/](http://localhost:3000/)
