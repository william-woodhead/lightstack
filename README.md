
# https://www.geeksforgeeks.org/how-to-dockerize-an-expressjs-app/
dok
$ docker build -f Dockerfile.dev -t williamwoodhead/lightstack .
$ docker run -d -it –-rm -p 3000:3000 –name lightstack 5ce1719f5171