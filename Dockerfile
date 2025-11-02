# Dockerfile - simple Node 20 image
FROM node:20-alpine

# create app directory
WORKDIR /usr/src/app

# copy package files first for caching
COPY package.json package-lock.json* ./

# install deps
RUN npm install --production

# copy rest
COPY . .

# create public if not exists
RUN mkdir -p public

EXPOSE 3000
CMD ["node", "index.js"]
