// Dockerfile

FROM node:slim // Set the baseImage to use for subsequent instructions. FROM must be the first instruction in a Dockerfile. FROM baseImage or FROM baseImage:tag or FROM baseImage@digest
WORKDIR /app // Set the working directory for any subsequent ADD, COPY, CMD, ENTRYPOINT, or RUN instructions that follow it in the Dockerfile. WORKDIR /path/to/workdir or WORKDIR relative/path
COPY . /app // Copy files or folders from source to the dest path in the image's filesystem. COPY hello.txt /absolute/path or COPY hello.txt relative/to/workdir
RUN npm install // Execute any commands on top of the current image as a new layer and commit the results. RUN apt-get update && apt-get install -y curl
EXPOSE 3000 // Define the network ports that this container will listen on at runtime. EXPOSE 8080 or EXPOSE 80 443 22 or EXPOSE 7000-8000
CMD node index.js // Provide defaults for an executing container. If an executable is not specified, then ENTRYPOINT must be specified as well. There can only be one CMD instruction in a Dockerfile.CMD [ "/bin/ls", "-l" ]


Steps to Create Docker Image

docker build -t achilles240395/node-docker:0.0.1.RELEASE .  // we've add tag (i.e -t) & Dot (.) at the end to tell that Dockerfile that we're build is available in current directory.

docker container ls // It will list out all the running container, Till now we only build image. it won't list any. but if we see in docker desktop, we see the created image achilles240395/node-docker which tag is 0.0.1.RELEASE

docker container run -d -p 3000:3000 achilles240395/node-docker:0.0.1.RELEASE // -d is to run in detach mode & port which app running:port which docker need to run.

// when hit enter, It'll give sha string value.

docker container ls // this time it'll list the running container & run localhost:3000 our node application up & running

docker container stop d2e // it'll stop the container which sha value start with d2e

// After run above code, our node application also stopped.

docker push achilles240395/node-docker:0.0.1.RELEASE // It will push our container to global. If we delete image & container from desktop local, & we pull it from Global repository.

docker pull achilles240395/node-docker:0.0.1.RELEASE // to run global docker image remotely.
