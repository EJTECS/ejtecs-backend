FROM node:18
WORKDIR /app
ARG MONGODB_URL
ARG DB_NAME

EXPOSE 8080
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

ENV MONGODB_URL=${MONGODB_URL}
ENV DB_NAME=${DB_NAME}
ENTRYPOINT ["node", "/app/build/index.js"]