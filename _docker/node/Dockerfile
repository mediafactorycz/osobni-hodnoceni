FROM node:9

RUN apt-get update && apt-get install -y \
    apt-utils \
    git \
    curl \
    apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

#RUN mkdir /home/node/app
#RUN cd /home/node/app

WORKDIR /home/node/app

RUN pwd
RUN ls -al

# install packages
#RUN yarn --pure-lockfile

# build app
#RUN yarn build

# run server
#RUN yarn start

EXPOSE 3000