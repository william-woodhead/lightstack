
# https://www.geeksforgeeks.org/how-to-dockerize-an-expressjs-app/
$ docker build -f Dockerfile -t williamwoodhead/lightstack .
$ docker run -d -p 3000:3000 williamwoodhead/lightstack:latest

# Start
$ node --env-file=.env index.js