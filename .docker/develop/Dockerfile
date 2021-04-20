FROM node:fermium-alpine3.13

ENV PORT 3000
ENV APP_ENV develop

# Create app directory
RUN mkdir -p /vianch-site-develop
WORKDIR /vianch-site-develop

# Installing dependencies
COPY ../../package.json /vianch-site-develop/
RUN yarn global add gatsby-cli
RUN yarn install

# Copying source files
# COPY gatsby-config.js /vianch-site
COPY ../../gatsby-config.js ./vianch-site-develop
COPY ../.. /vianch-site-develop

EXPOSE 3000

# Running the app
CMD ["yarn", "dev"]
