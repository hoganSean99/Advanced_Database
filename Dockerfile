#FROM jenkins/jenkins:lts
#USER root
#RUN apt-get update && \
#apt-get -y install apt-transport-https \
#    ca-certificates \
#    curl \
#    gnupg2 \
#    software-properties-common && \
#curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
#add-apt-repository \
#    "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
#    $(lsb_release -cs) \
#    stable" && \
#apt-get update && \
#apt-get -y install docker-ce
#RUN apt-get install -y docker-ce
#RUN usermod -a -G docker jenkins
#USER jenkins

#FROM node:boron
#RUN mkdir -p  app
#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#CMD node app.js
#EXPOSE 3000
#CMD [ "node", "index" 

# use a node base image
# FROM node:7-onbuild

# set maintainer
# LABEL maintainer "hogan.sean1999@gmail.com"

# set a health check
# HEALTHCHECK --interval=5s \
#             --timeout=5s \
#             CMD curl -f http://127.0.0.1:8000 || exit 1

# tell docker what port to expose
# EXPOSE 8000


FROM node:8
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1
RUN npm install pm2 -g
RUN npm install
RUN pm2 install pm2-server-monit
# CMD pm2-runtime index.js
CMD pm2 start src/index.js
EXPOSE 8000




#FROM node:7
#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#CMD node index.js
#EXPOSE 8081
