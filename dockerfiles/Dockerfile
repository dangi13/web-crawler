FROM node:12.16.0-alpine3.9
LABEL Author="dangi13"
RUN apk update && apk add --no-cache nmap && \
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
ARG username
ARG password

RUN git clone -q https://${username}:${password}@github.com/dangi13/web-crawler.git
WORKDIR /usr/app/web-crawler
RUN npm install > /dev/null
WORKDIR /usr/app/web-crawler/src/ui/__tests__
RUN echo -e "#!/bin/bash\n" \
        "npm test -t men-clothes.test.js" > script.sh
RUN chmod 777 script.sh
EXPOSE 8000
CMD ["sh","script.sh"]
