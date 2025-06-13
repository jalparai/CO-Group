FROM node:20-alpine AS build

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app

COPY --from=build /app/. /app/.

EXPOSE 3001

CMD ["npm", "start"]