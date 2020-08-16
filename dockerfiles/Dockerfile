FROM node:12.16.0-alpine3.9
LABEL Author="dangi13"
RUN apk update && apk add --no-cache nmap && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache \
      chromium \
      harfbuzz \
      "freetype>2.8" \
      ttf-freefont \
      nss
RUN apk add git
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV CHROMIUM_PATH /usr/bin/chromium-browser
RUN apk add git
WORKDIR /usr/app

RUN git clone -q https://dangi13:${secrets.GITHUB_TOKEN}@github.com/dangi13/web-crawler.git
WORKDIR /usr/app/web-crawler
RUN npm install > /dev/null
WORKDIR /usr/app/web-crawler/src/ui/__tests__/kitsune/L3VPN/jestapi
RUN echo -e "#!/bin/bash\n" \
        "npm test -t men-clothes.test.js" > script.sh
RUN chmod 777 script.sh
EXPOSE 8000
CMD ["sh","script.sh"]
