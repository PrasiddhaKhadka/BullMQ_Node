FROM node:24-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev
# npm ci is faster than npm install and ensures a clean slate by removing the node_modules folder before installing dependencies.
# The --omit=dev flag tells npm to skip installing devDependencies, which are not needed in a production environment. 

COPY . .

CMD ["npm", "start"]