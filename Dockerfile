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


FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8081
