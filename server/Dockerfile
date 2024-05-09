FROM node:18-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "server.js"]









## Alternative final docker file


# FROM node:lts-alpine

# # Install openssl package
# RUN apk add --update --no-cache openssl

# WORKDIR /usr/src/app

# COPY package*.json ./
# COPY prisma ./prisma/
# COPY .env ./
# COPY jsconfig.json ./

# RUN npm install

# COPY . .

# RUN npx prisma generate

# EXPOSE 4000

# CMD npm start