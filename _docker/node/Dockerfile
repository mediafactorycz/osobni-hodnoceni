FROM node:9

RUN apt-get update && apt-get install -y \
    apt-utils \
    git \
    curl \
    apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update && apt-get install -y yarn

WORKDIR /home/node/app

RUN yarn global add pm2

CMD yarn --pure-lockfile && yarn build && pm2-runtime start server/index.js --name="osobni-hodnoceni"

EXPOSE 3000