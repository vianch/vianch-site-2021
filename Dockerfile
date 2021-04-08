FROM node:fermium

ENV PORT 3000
ENV APP_ENV production

# Create app directory
RUN mkdir -p /vianch-site
WORKDIR /vianch-site

# Installing dependencies
COPY package.json /vianch-site/
RUN yarn global add gatsby-cli
RUN yarn install

# Copying source files
# COPY gatsby-config.js /mayday-marketing-site
COPY . /vianch-site

# Building app
RUN npm run build
EXPOSE 8080

# Running the app
CMD ["yarn", "start"]