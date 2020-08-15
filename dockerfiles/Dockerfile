FROM node:12.16.0-alpine3.9
LABEL Author="dangi13"
RUN apk update
RUN apk add git
WORKDIR /usr/app

RUN git clone -q https://dangi13:d5e898d68597b1d8c5d87e6cf87b328dd2980659@github.com/dangi13/web-crawler.git
WORKDIR /usr/app/web-crawler
RUN npm install > /dev/null
WORKDIR /usr/app/web-crawler/src/ui/__tests__/kitsune/L3VPN/jestapi
RUN echo -e "#!/bin/bash\n" \
        "npm test -t men-clothes.test.js" > script.sh
RUN chmod 777 script.sh
EXPOSE 8000
CMD ["sh","script.sh"]
