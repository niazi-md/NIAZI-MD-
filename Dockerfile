# Simple Node.js Dockerfile for NIAZI-MD
FROM node:20-alpine

WORKDIR /usr/src/app

# copy package.json first for caching
COPY package.json package-lock.json* ./ 

RUN npm install --production

COPY . .

# create auth_info dir for baileys multi-file auth
RUN mkdir -p /usr/src/app/auth_info

ENV PORT=3000
EXPOSE 3000

CMD ["node", "index.js"]
