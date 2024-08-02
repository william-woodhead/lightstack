
# https://www.geeksforgeeks.org/how-to-dockerize-an-expressjs-app/
dok
$ docker build -f Dockerfile -t williamwoodhead/lightstack .
$ docker run -d -p 3000:3000 williamwoodhead/lightstack:latest